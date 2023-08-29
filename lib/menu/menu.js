const inquirer = require("inquirer");
const { viewDepartments, addDepartment } = require("./dpt");
const { viewRoles, addRole } = require("./role");
const { viewEmployees, addEmployee, updateEmployee } = require("./employee");

function mainMenu() {
    console.log(`
  ❐------------------❐
  |  Employee Tracker |
  ❐------------------❐
  == MAIN MENU ==
`);

    inquirer
        .prompt([
            {
                type: "list",
                name: "menuSelect",
                message: "What would you like to do?",
                choices: ["View All Departments", "Add Department", "View All Roles", "Add Role", "View All Employees", "Add Employee", "Update Employee Role", "Exit"],
                default: "View All Departments",
            },
        ])
        .then(({ menuSelect }) => {
            switch (menuSelect) {
                case "View All Departments":
                    console.clear();
                    viewDepartments();
                    break;
                case "Add Department":
                    console.clear();
                    addDepartment();
                    break;
                case "View All Roles":
                    console.clear();
                    viewRoles();
                    break;
                case "Add Role":
                    console.clear();
                    addRole();
                    break;
                case "View All Employees":
                    console.clear();
                    viewEmployees();
                    break;
                case "Add Employee":
                    console.clear();
                    addEmployee();
                    break;
                case "Update Employee Role":
                    console.clear();
                    updateEmployee();
                    break;
                case "Exit":
                    console.clear();
                    return
            }
        });
}

exports.mainMenu = mainMenu;
