class Employee {
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }
  
    display() {
      console.log(`${this.position}: ${this.name}`);
    }
  }
  
  class Group {
    constructor(name) {
      this.name = name;
      this.members = [];
    }
  
    add(member) {
      this.members.push(member);
    }
  
    display() {
      console.log(`Group: ${this.name}`);
      this.members.forEach((member) => member.display());
    }
  }
  
  const employee1 = new Employee('John Doe', 'Manager');
  const employee2 = new Employee('Jane Smith', 'Developer');
  
  const developmentTeam = new Group('Development Team');
  developmentTeam.add(employee1);
  developmentTeam.add(employee2);
  
  const employee3 = new Employee('Alice Johnson', 'Designer');
  
  const company = new Group('Company');
  company.add(employee3);
  company.add(developmentTeam);
  
  company.display();