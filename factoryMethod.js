function fulltime() {
    this.salary = 1000;
}

function parttime() {
    this.salary = 500;
}

function freelancer() {
    this.salary = 100;
}

function employeeFactory() {
    this.emp = null;

    this.CreateEmployee = function (type) {
        switch (type) {
            case "fulltime":
                return new fulltime();
                break;
            case "parttime":
                return new parttime();
                break;
            case "freelancer":
                return new freelancer();
                break;
            default:
                break;
        }
        this.emp.type = type;
    };
}

const EmployeeFactory = new employeeFactory();

const fulltime1 = EmployeeFactory.CreateEmployee("fulltime");
console.log(fulltime1);