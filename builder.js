class Pizza {}
class PizzaBuilder {
    constructor() {
      this.pizza = new Pizza();
    }
  
    setDough(dough) {
      this.pizza.dough = dough;
      return this;
    }
  
    setSauce(sauce) {
      this.pizza.sauce = sauce;
      return this;
    }
  
    setCheese(cheese) {
      this.pizza.cheese = cheese;
      return this;
    }
  
    addToppings(toppings) {
      this.pizza.toppings = toppings;
      return this;
    }
  
    build() {
      return this.pizza;
    }
  }
  const pizzaBuilder = new PizzaBuilder();
  const pepperoniPizza = pizzaBuilder
    .setDough("thin crust")
    .setSauce("tomato sauce")
    .setCheese("mozzarella")
    .addToppings(["pepperoni"])
    .build();

console.log(pepperoniPizza)