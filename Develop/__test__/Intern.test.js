const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("Constructor", () =>{
        it("Setting school in Constructor",() => {
            const school = "louieiply";
            const intern = new Intern("Louie",12345,"louie@email.com", school);
            expect(intern.school).toBe(school);
        });

    });
    describe("Functions",() =>{
        it("getRole() should return 'Intern'", () => {
            const role = "Intern";
            const intern = new Intern("louie",12345,"louie@email.com", "UniSA");
            expect(intern.getRole()).toBe(role);
        });
        it("getSchool() should return '12345'", () => {
            const school = "louieiply";
            const intern = new Intern("louie",12345,"louie@email.com", school);
            expect(intern.getSchool()).toBe(school);
        });
    });
    
})