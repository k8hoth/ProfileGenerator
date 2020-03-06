const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

let team = [];
let name;
let id;
let title;
let email;

// first function kicking off first question
async function start() {
    let team = "";
    let name;
    let id;
    let title;
    let email;

function start() {
    // //first question
    // await inquirer.prompt([
            inquirer.prompt([{
            type: "list",
            message: "Name of the team member you would like to add?",
         }
    
    switch (title) {
        case "Employee":
            await inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter the employee number.",
                    name: "employeeNum"
                },
                {
                    type: "list",
                    message: "Do you want to enter an additional team member?",
                    choices: ["Yes", "No"],
                    name: "addTeamMember"
                }
            ]).then(response => {
                const employee = new Employee(name, id, email, response.officeRoomNum);
                associate = fs.readFileSync("templates/employee.html");
                team = team + "\n" + eval('`' + associate + '`');
                if (response.addTeamMember === "Yes, add another member") {
                    start()
                } else {
                    console.log("Your team info has been successfully recorded");

                }
            });
        case "Manager":
            await inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter the employee number.",
                    name: "employeeNum"
                },
                {
                    type: "list",
                    message: "Do you want to enter an additional team member?",
                    choices: ["Yes", "No"],
                    name: "addTeamMember"
                }
            ]).then(response => {
                const manager = new Manager(name, id, email, response.officeRoomNum);
                associate = fs.readFileSync("templates/manager.html");
                team = team + "\n" + eval('`' + associate + '`');
                if (response.addTeamMember === "Yes, add another member") {
                    start()
                } else {
                    console.log("Your team info has been successfully recorded");

                }
            });
            break; 
        case "Intern":
            await inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter the new Intern's school name.",
                    name: "school"
                },
                {
                    type: "confirm",
                    message: "Do you want to enter an additional team member?",
                    name: "addTeamMember"
                }
            ]).then(response => {
                const intern = new Intern(name, id, email, response.school);
                associate = fs.readFileSync("templates/intern.html");
                team = team + "\n" + eval('`' + associate + '`');
                if (response.addTeamMember === "Yes, add another member") {
                    start()
                } else {
                    console.log("Your team info has been successfully recorded");

                }
            });
            break;
        case "Engineer":
            await inquirer.prompt([
                {
                    type: "input",
                    message: "Please enter the new Engineer's GutHub Account.",
                    name: "github"
                },
                {
                    type: "confirm",
                    message: "Do you want to enter an additional team member?",
                    name: "addTeamMember"
                }
            ]).then(response => {
                const engineer = new Engineer(name, id, email, response.github);
                associate = fs.readFileSync("templates/engineer.html");
                team = team + "\n" + eval('`' + associate + '`');
                if (response.addTeamMember === "Yes, add another member") {
                    start()
                } else {
                    console.log("Your team info has been successfully recorded");

                }
            });
            break;
    }


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
            console.log(team);
            console.log("Your team info has been successfully recorded");

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
            console.log(team);
            console.log("Your team info has been successfully recorded");

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
            console.log(team);
            console.log("Your team info has been successfully recorded");

        };
    });
};
function name(params) {

}
start()