class BankAccount {
    constructor(balance) {
      this.balance = balance;
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  class BankAccountProxy {
    constructor(realAccount, accountOwner) {
      this.realAccount = realAccount;
      this.accountOwner = accountOwner;
    }
  
    getBalance() {
      if (this.authenticate()) {
        return this.realAccount.getBalance();
      } else {
        return "Access denied. Authentication failed.";
      }
    }
  
    authenticate() {
      return this.accountOwner === "authorizedUser";
    }
  }
  
  const realAccount = new BankAccount(1000);
  const proxy = new BankAccountProxy(realAccount, "authorizedUser");
  
  console.log(proxy.getBalance()); 