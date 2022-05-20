const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Constructor", () =>{
        it("Setting name in Constructor",() => {
            const name = "louie";
            const employee = new Employee(name,12345,"louie@email.com");
            expect(employee.name).toBe(name);
        });
        it("Setting id in Constructor",() => {
            const id = 12345;
            const employee = new Employee("louie",id,"louie@email.com");
            expect(employee.id).toBe(id);
        });
        it("Setting id in Constructor",() => {
            const email = "louie@email.com";
            const employee = new Employee("louie",12345,email);
            expect(employee.email).toBe(email);
        });

    });
    describe("Functions",() =>{
        it("getRole() should return 'Employee'", () => {
            const role = "Employee";
            const employee = new Employee("louie",12345,"louie@email.com");
            expect(employee.getRole()).toBe(role);
        });
        it("getName() should return 'louie'", () => {
            const name = "louie";
            const employee = new Employee(name,12345,"louie@email.com");
            expect(employee.getName()).toBe(name);
        });
        it("getId() should return 12345", () => {
            const id = 12345;
            const employee = new Employee("louie",id,"louie@email.com");
            expect(employee.getId()).toBe(id);
        });
        it("getEmail() should return 'louie@email.com'", () => {
            const email = "louie@email.com";
            const employee = new Employee("louie",12345,email);
            expect(employee.getEmail()).toBe(email);
        });
    });
    
})