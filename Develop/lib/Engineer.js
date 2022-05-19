const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name, id, email,github){
        super(name,id,email);
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
    getRoleIcon(){
        return `<i class="fa-solid fa-glasses"></i>`;
    }
}

module.exports = Engineer;