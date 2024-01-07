class HotBeverageTemplate {
    prepareBeverage() {
      this.boilWater();
      this.brew();
      this.pourInCup();
      this.addCondiments();
    }
  
    boilWater() {
      console.log("Boiling water");
    }
  
    pourInCup() {
      console.log("Pouring into cup");
    }
  
    brew() {}
    addCondiments() {}
  }
  
  class Coffee extends HotBeverageTemplate {
    brew() {
      console.log("Dripping coffee through filter");
    }
  
    addCondiments() {
      console.log("Adding sugar and milk");
    }
  }
  
  class Tea extends HotBeverageTemplate {
    brew() {
      console.log("Steeping the tea");
    }
  
    addCondiments() {
      console.log("Adding lemon");
    }
  }
  
  const coffee = new Coffee();
  coffee.prepareBeverage();
  
  const tea = new Tea();
  tea.prepareBeverage();