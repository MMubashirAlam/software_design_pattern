class RoundCoffeePod {
    insertRoundPod() {
      console.log("Inserted a round coffee pod.");
    }
  }
  
  class SquareCoffeePod {
    insertSquarePod() {
      console.log("Inserted a square coffee pod.");
    }
  }
  
  class CoffeeMaker {
    insertCircularPod() {
      console.log("Inserted a circular coffee pod.");
    }
  
    makeCoffee() {
      console.log("Brewing coffee with a circular pod.");
    }
  }
  
  class SquarePodAdapter {
    constructor(squarePod) {
      this.squarePod = squarePod;
    }
  
    insertCircularPod() {
      console.log("Converting and inserting a square pod as a circular pod.");
      this.squarePod.insertSquarePod();
    }
  
    makeCoffee() {
      this.insertCircularPod();
      console.log("Brewing coffee with a circular pod.");
    }
  }
  
  const roundPodCoffeeMaker = new CoffeeMaker();
  roundPodCoffeeMaker.insertCircularPod();
  roundPodCoffeeMaker.makeCoffee();
  
  const squarePod = new SquareCoffeePod();
  const squarePodAdapter = new SquarePodAdapter(squarePod);
  squarePodAdapter.insertCircularPod();
  squarePodAdapter.makeCoffee();