const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");
const render = require("./lib/htmlRenderer");
let team = [];
let name;
let id;
let title;
let email;

function start() {
    
    inquirer.prompt([
        {
            type: "list",
            message: "Which member of staff would you like to add?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "title"
        },
        {
            type: "input",
            message: `Please enter the new employee's name.`,
            name: "name"
        },
        {
            type: "input",
            message: `Please enter the new employee's I.D. Number.`,
            name: "id"
        },
        {
            type: "input",
            message: `Please enter the new employee's email`,
            name: "email"
        },
    ]).then(response => {
        title = response.title;
        name = response.name;
        id = response.id;
        email = response.email;
        if (title === "Manager") {
            managerFunc()
        } else if (title === "Intern") {
            internFunc()
        } else if (title === "Engineer") {
            engineerFunc()
        }
    });
};
function managerFunc() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the new Manager's office room number.",
            name: "officeRoomNum"
        },
        {
            type: "list",
            message: "Do you want to enter an additional team member?",
            choices: ["Yes, add another member", "No, that's everyone"],
            name: "addTeamMember"
        }
    ]).then(response => {
        const manager = new Manager(name, id, email, response.officeRoomNum);
        team.push(manager);
        if (response.addTeamMember === "Yes, add another member") {
            start()
        } else {
            createFile()
        };
    });
};
function internFunc() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the new Intern's school name.",
            name: "school"
        },
        {
            type: "list",
            message: "Do you want to enter an additional team member?",
            choices: ["Yes, add another member", "No, that's everyone"],
            name: "addTeamMember"
        }
    ]).then(response => {
        const intern = new Intern(name, id, email, response.school);
        team.push(intern)
        if (response.addTeamMember === "Yes, add another member") {
            start()
        } else {
            createFile()
        };
    });
};
function engineerFunc() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the new Engineer's GitHub Account.",
            name: "github"
        },
        {
            type: "list",
            message: "Do you want to enter an additional team member?",
            choices: ["Yes, add another member", "No, that's everyone"],
            name: "addTeamMember"
        }
    ]).then(response => {
        const engineer = new Engineer(name, id, email, response.github);
        team.push(engineer)
        if (response.addTeamMember === "Yes, add another member") {
            start()
        } else {
            createFile()
        };
    });
};
function createFile() {
    fs.writeFileSync(outputPath, render(team), "utf-8");
    console.log(`Team successfully added to team.html in Output Folder`);

}
start()
