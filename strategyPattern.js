class DiscountStrategy {
    applyDiscount(price) {
      return price;
    }
  }
  
  class NoDiscount extends DiscountStrategy {
    applyDiscount(price) {
      return price;
    }
  }
  
  class PercentageDiscount extends DiscountStrategy {
    constructor(percentage) {
      super();
      this.percentage = percentage;
    }
  
    applyDiscount(price) {
      return price - (price * (this.percentage / 100));
    }
  }
  
  class FixedDiscount extends DiscountStrategy {
    constructor(discountAmount) {
      super();
      this.discountAmount = discountAmount;
    }
  
    applyDiscount(price) {
      return price - this.discountAmount;
    }
  }
  
  class ShoppingCart {
    constructor(discountStrategy) {
      this.items = [];
      this.discountStrategy = discountStrategy;
    }
  
    addItem(item, price) {
      this.items.push({ item, price });
    }
  
    calculateTotal() {
      let total = this.items.reduce((acc, item) => acc + item.price, 0);
      return this.discountStrategy.applyDiscount(total);
    }
  }
  
  const cart1 = new ShoppingCart(new NoDiscount());
  cart1.addItem("Item 1", 100);
  cart1.addItem("Item 2", 50);
  console.log("Total (No Discount): $" + cart1.calculateTotal());
  
  const cart2 = new ShoppingCart(new PercentageDiscount(10));
  cart2.addItem("Item 1", 100);
  cart2.addItem("Item 2", 50);
  console.log("Total (10% Discount): $" + cart2.calculateTotal());
  
  const cart3 = new ShoppingCart(new FixedDiscount(20));
  cart3.addItem("Item 1", 100);
  cart3.addItem("Item 2", 50);
  console.log("Total ($20 Discount): $" + cart3.calculateTotal());