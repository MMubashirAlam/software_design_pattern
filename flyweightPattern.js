class UserAvatarFlyweight {
    constructor(profilePicture, username) {
      this.profilePicture = profilePicture;
      this.username = username;
    }
  
    render() {
      return `${this.username}, ${this.profilePicture}`;
    }
  }
  
  class UserAvatarFactory {
    constructor() {
      this.flyweights = {};
    }
  
    getFlyweight(profilePicture, username) {
      const key = `${profilePicture}-${username}`;
      if (!this.flyweights[key]) {
        this.flyweights[key] = new UserAvatarFlyweight(profilePicture, username);
      }
  
      return this.flyweights[key];
    }
  }
  
  
  const userAvatarFactory = new UserAvatarFactory();
  
  const johnDoeAvatar = userAvatarFactory.getFlyweight("john-doe.jpg", "John Doe");
  const janeDoeAvatar = userAvatarFactory.getFlyweight("asad.jpg", "khan Doe");
  
  
  console.log(userAvatarFactory.flyweights);