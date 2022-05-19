const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;

    }

    getRole(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRoleIcon(){
        return `<i class="fas fa-mug-hot"></i>`;
    }
}

module.exports = Manager;