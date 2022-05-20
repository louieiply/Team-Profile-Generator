const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    describe("Constructor", () =>{
        it("Setting github in Constructor",() => {
            const github = "louieiply";
            const engineer = new Engineer("Louie",12345,"louie@email.com", github);
            expect(engineer.github).toBe(github);
        });

    });
    describe("Functions",() =>{
        it("getRole() should return 'Engineer'", () => {
            const role = "Engineer";
            const engineer = new Engineer("louie",12345,"louie@email.com", "louieiply");
            expect(engineer.getRole()).toBe(role);
        });
        it("getGithub() should return 'louieiply'", () => {
            const github = "louieiply";
            const engineer = new Engineer("louie",12345,"louie@email.com", github);
            expect(engineer.getGithub()).toBe(github);
        });
    });
    
})