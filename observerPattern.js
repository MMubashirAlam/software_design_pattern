class NewsPublisher {
    constructor() {
      this.subscribers = [];
    }
  
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    unsubscribe(subscriber) {
      this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    }
  
    publishArticle(article) {
      console.log(`Published: ${article}`);
      this.notifySubscribers(article);
    }
  
    notifySubscribers(article) {
      this.subscribers.forEach((subscriber) => {
        subscriber.update(article);
      });
    }
  }
  
  class Subscriber {
    constructor(name) {
      this.name = name;
    }
  
    update(article) {
      console.log(`${this.name} received: ${article}`);
    }
  }
  

  const publisher = new NewsPublisher();
  
  const subscriber1 = new Subscriber("User 1");
  const subscriber2 = new Subscriber("User 2");
  
  publisher.subscribe(subscriber1);
  publisher.subscribe(subscriber2);
  
  publisher.publishArticle("New article on the Observer Pattern!");
  
 