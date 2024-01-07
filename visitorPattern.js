class ShoppingCartVisitor {
    visitBook(book) {
      return book.price * (1 - book.discount);
    }
  
    visitElectronics(electronics) {
      return electronics.price * (1 - electronics.discount);
    }
  }
  
  class Product {
    accept(visitor) {
    }
  }
  
  class Book extends Product {
    constructor(title, price, discount) {
      super();
      this.title = title;
      this.price = price;
      this.discount = discount;
    }
  
    accept(visitor) {
      return visitor.visitBook(this);
    }
  }
  
  class Electronics extends Product {
    constructor(name, price, discount) {
      super();
      this.name = name;
      this.price = price;
      this.discount = discount;
    }
  
    accept(visitor) {
      return visitor.visitElectronics(this);
    }
  }
  
  const products = [new Book("The Catcher in the Rye", 15, 0.1), new Electronics("Smartphone", 500, 0.2)];
  
  const cartVisitor = new ShoppingCartVisitor();
  
  let totalWithoutDiscount = 0;
  let totalWithDiscount = 0;
  
  for (const product of products) {
    totalWithoutDiscount += product.price;
    totalWithDiscount += product.accept(cartVisitor);
  }
  
  console.log(`Total price without discounts: $${totalWithoutDiscount}`);
  console.log(`Total price with discounts: $${totalWithDiscount}`);