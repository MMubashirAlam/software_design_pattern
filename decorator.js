class Coffee {
    constructor() {}
  
    make() {
      return"coffee is made :";
    }
  }
  
  class Espresso extends Coffee {
    make() {
      return "Espresso is made";
    }
  }
  
  class CoffeeDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    make() {
      return this.coffee.make();
    }
  }
  
  class MilkDecorator extends CoffeeDecorator {
    make() {
      return `${super.make()} with milk`;
    }
  }
  
  class SugarDecorator extends CoffeeDecorator {
    make() {
      return `${super.make()} with sugar`;
    }
  }
  
  const coffee = new Coffee();
  const milkEspresso = new MilkDecorator(coffee);
  const sweetMilkEspresso = new SugarDecorator(milkEspresso);
  
  console.log(milkEspresso.make()); 
  console.log(sweetMilkEspresso.make()); 