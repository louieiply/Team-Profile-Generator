const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("Constructor", () =>{
        it("Setting office number in Constructor",() => {
            const officeNumber = "12345678";
            const manager = new Manager("Louie",12345,"louie@email.com", officeNumber);
            expect(manager.officeNumber).toBe(officeNumber);
        });

    });
    describe("Functions",() =>{
        it("getRole() should return 'Manager'", () => {
            const role = "Manager";
            const manager = new Manager("louie",12345,"louie@email.com", 12345678);
            expect(manager.getRole()).toBe(role);
        });
        it("getOfficeNumber() should return 12345678", () => {
            const officeNumber = 12345678;
            const manager = new Manager("louie",12345,"louie@email.com", officeNumber);
            expect(manager.getOfficeNumber()).toBe(officeNumber);
        });
    });
    
})