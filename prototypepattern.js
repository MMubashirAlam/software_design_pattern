class newUser{}

class UserPrototype {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  
    clone() {
      const newUserPrototype = new UserPrototype();
      newUserPrototype.name = this.name;
      newUserPrototype.email = this.email;
      newUserPrototype.password = this.password;
      return newUserPrototype;
    }
  }
  const prototypeUser = new UserPrototype("John Doe", "john.doe@example.com", "password123");

  function createUser(prototypeUser) {
    const newUser = prototypeUser.clone();
    return newUser;
  }
  
  const user = createUser(prototypeUser);
  console.log(user);