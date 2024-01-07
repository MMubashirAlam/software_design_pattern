class Singleton {
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
  
      this.data = "Singleton instance created.";
      
      Singleton.instance = this;
    }
  
    static getInstance() {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  
    getData() {
      return this.data;
    }
  }
  
  const singletonInstance1 = new Singleton();
  console.log(singletonInstance1.getData()); 
  
  const singletonInstance2 = Singleton.getInstance();
  console.log(singletonInstance2.getData()); 
  
  console.log(singletonInstance1 === singletonInstance2); 
  