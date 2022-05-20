const Inquirer = require("Inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const uuid = require("./src/uuid");
const team_members = new Array();
const roles = ["Intern","Engineer"];
var roundCounter = 0;
var memberCounter = [0,0,0];
const init_question = [
    {
        type: "list",
        name: "firstquestion",
        message: "What role does your team member have?",
        choices: ["Manager"],
    }
]
const first_question = [
    {
        type: "list",
        name: "firstquestion",
        message: "What role does your team member have?",
        choices: roles,
    }
]
const intern_quest = [
    {
        type: "input",
        name: "fullName",
        message: "What is the full name of the team member?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Email of the team member?",
    },
    {
        type: "input",
        name: "school",
        message: "What is the school is this intern studying at?",
    }
]
const engineer_quest = [
    {
        type: "input",
        name: "fullName",
        message: "What is the full name of the team member?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Email of the team member?",
    },
    {
        type: "input",
        name: "github",
        message: "What is the GitHub URL of this engineer?",
    }
]
const manager_quest = [
    {
        type: "input",
        name: "fullName",
        message: "What is the full name of the team member?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Email of the team member?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the officeNumber of the manager?",
    }
]
const finish_quest = [
    {
        type:"list",
        name:"finishOrNot",
        message:"Are you finished entering your team members?",
        choices: ["Yes","No"],
    }
]

const  startPrompt = async (questionSet) => {
    const answer = await Inquirer.prompt(questionSet);
    return answer;
}

const generateHtml = async () =>{
    var cards = "";
    team_members.forEach(employee => {
        var icon = employee.getRoleIcon();
        employee.name;
        var name = employee.getName();
        var role = employee.getRole();
        var id = employee.getId();
        var email = employee.getEmail();
        var roletext = "";
        switch (employee.getRole()) {
            case "Intern":
                roletext = "School: " + employee.getSchool();
                break;
        
            case "Engineer":
                roletext = "GitHub: " + employee.getGithub();
                break;

            case "Manager":
                roletext = "OfficeNumber: " + employee.getOfficeNumber();
                break;
            default:
                roletext = "Employee: " + "I am a happy employee";
                break;
        }
        cards += `        <div class="col-3">
        <div class="card  mb-3" style="max-width: 18rem;">
            <div class="card-header text-white bg-primary"><h4>${name}&nbsp;</h4><h5> ${icon} ${role}</h5></div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="${email}">${email}</a></li>
                        <li class="list-group-item">${roletext}</li>
                    </ul>
                </div>

        </div>
    </div>`


    }); 

    var pageHtml =         `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet" crossorigin="anonymous">
<title>Team Portfolio</title>
</head>
<body>
<header class="justify-content-center bg-primary" style="padding-top:20px; padding-bottom:20px;">
    <h2 class="text-center text-light">Team Profile</h2>
</header>
  <div class="container" style="margin-top: 10%;">
    <div class="row justify-content-center">` +
    cards+
    `</div>
</div>
</body>
</html>
    `;
    fs.writeFileSync("./dist/index.html",pageHtml);
    
}



const init = async () => {
    var exit = false;
    while(!exit){
        const firstAns = roundCounter <1 ? await startPrompt(init_question) : await startPrompt(first_question);
        roundCounter++;
        const {firstquestion} =  await firstAns;
        switch (firstquestion) {
            case "Intern":
                memberCounter[0] += 1;
                console.log(`A ${firstquestion} has been added to the Team`);
                var answer = await startPrompt(intern_quest);
                
                var {email, fullName, school} = await answer;
                team_members.push(new Intern(email,uuid(),fullName,school));
                break;
            case "Engineer":
                memberCounter[1] += 1;
                console.log(`A ${firstquestion} has been added to the Team`);
                var answer = await startPrompt(engineer_quest);
                var {email, fullName, github} = answer;
                team_members.push(new Engineer(email,uuid(),fullName,github));
                break;
            case "Manager":
                memberCounter[2] += 1;
                console.log(`A ${firstquestion} has been added to the Team`);
                var answer = await startPrompt(manager_quest);
                var {email, fullName, officeNumber} = answer;
                team_members.push(new Manager(email,uuid(),fullName,officeNumber));
                break;
            default:
                console.log(`A ${firstquestion} has been added to the Team`);
                break;
        }
        console.clear();
        var finished = await startPrompt(finish_quest);
        var {finishOrNot} = finished;
        exit = finishOrNot == "Yes" ? true:false;

    }
    await generateHtml();
}


// Program initialise
init();