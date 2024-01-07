class VehicleFactory {
    createCar() {
        console.log("car is created");
    }
    createMotorcycle() {
        console.log("motorcycle is created");
    }
  }
  
  class HondaFactory extends VehicleFactory {
    createCar() {
      return new HondaCar();
    }
  
    createMotorcycle() {
      return new HondaMotorcycle();
    }
  }
  
  class ToyotaFactory extends VehicleFactory {
    createCar() {
      const toyotaCar = new ToyotaCar();
      console.log("car is created");
      return toyotaCar;
    }
  
    createMotorcycle() {
      const toyotamotorcycle = new ToyotaMotorcycle();
      console.log("motor cycle is creatd")
      return new ToyotaMotorcycle();
    }
  }
  
  class HondaCar {}
  class HondaMotorcycle {}
  class ToyotaCar {}
  class ToyotaMotorcycle {}
  
  const hondaFactory = new HondaFactory();
  const hondaCar = hondaFactory.createCar();
  const hondaMotorcycle = hondaFactory.createMotorcycle();
  
  const toyotaFactory = new ToyotaFactory();
  const toyotaCar = toyotaFactory.createCar();
  const toyotaMotorcycle = toyotaFactory.createMotorcycle();
  
