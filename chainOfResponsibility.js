class AuthenticationHandler {
    constructor(successor = null) {
      this.successor = successor;
    }
  
    setSuccessor(successor) {
      this.successor = successor;
    }
  
    handleRequest(username, password) {
      if (this.authenticate(username, password)) {
        return this.onAuthenticated(username);
      } else if (this.successor) {
        return this.successor.handleRequest(username, password);
      } else {
        return this.onAuthenticationFailed(username);
      }
    }
  
    authenticate(username, password) {
      return false;
    }
  
    onAuthenticated(username) {
      console.log(`${username} is authenticated.`);
      return true;
    }
  
    onAuthenticationFailed(username) {
      console.log(`${username} authentication failed.`);
      return false;
    }
  }
  
  const primaryAuthHandler = new AuthenticationHandler();
  const backupAuthHandler = new AuthenticationHandler();
  
  primaryAuthHandler.setSuccessor(backupAuthHandler);
  
  const username = "user123";
  const password = "password123";
  
  const isAuthenticated = primaryAuthHandler.handleRequest(username, password);
  
  if (isAuthenticated) {
    console.log("Access granted.");
  } else {
    console.log("Access denied.");
  }