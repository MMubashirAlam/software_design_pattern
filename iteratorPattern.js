class Iterator {
    constructor(items) {
      this.index = 0;
      this.items = items;
    }
  
    hasNext() {}
    next() {}
  }
  
  class ArrayIterator extends Iterator {
    constructor(items) {
      super(items);
    }
  
    hasNext() {
      return this.index < this.items.length;
    }
  
    next() {
      return this.items[this.index++];
    }
  }
  
  class Collection {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    createIterator() {
      return new ArrayIterator(this.items);
    }
  }
  
  const myCollection = new Collection();
  myCollection.addItem("Item 1");
  myCollection.addItem("Item 2");
  myCollection.addItem("Item 3");
  
  const iterator = myCollection.createIterator();
  
  while (iterator.hasNext()) {
    const item = iterator.next();
    console.log(item);
  }