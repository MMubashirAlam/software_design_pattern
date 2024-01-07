// Mediator
class ChatMediator {
    constructor() {
      this.users = [];
    }
  
    registerUser(user) {
      this.users.push(user);
      user.setMediator(this);
    }
  
    sendMessage(message, sender) {
      this.users.forEach((user) => {
        if (user !== sender) {
          user.receiveMessage(message);
        }
      });
    }
  }
  
  class User {
    constructor(name) {
      this.name = name;
      this.mediator = null;
    }
  
    setMediator(mediator) {
      this.mediator = mediator;
    }
  
    sendMessage(message) {
      this.mediator.sendMessage(message, this);
    }
  
    receiveMessage(message) {
      console.log(`${this.name} received: ${message}`);
    }
  }
  
  const chatMediator = new ChatMediator();
  
  const alice = new User("Alice");
  const bob = new User("Bob");
  const charlie = new User("Charlie");
  
  chatMediator.registerUser(alice);
  chatMediator.registerUser(bob);
  chatMediator.registerUser(charlie);
  
  alice.sendMessage("Hello, everyone!");
  bob.sendMessage("Hi, Alice!");
  charlie.sendMessage("Hey, there!");
  
 