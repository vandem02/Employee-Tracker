const inquirer = require("inquirer");
const { viewDepartments, addDepartment } = require("./dpt");
const { viewRoles, addRoleMenu } = require("./role");
const { viewAllEmployeesMenu, addEmployeeMenu, updateEmployeeRoleMenu } = require("./employee");

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
                message: "Please choose one of the following options:",
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
                    addRoleMenu();
                    break;
                case "View All Employees":
                    console.clear();
                    viewAllEmployeesMenu();
                    break;
                case "Add Employee":
                    console.clear();
                    addEmployeeMenu();
                    break;
                case "Update Employee Role":
                    console.clear();
                    updateEmployeeRoleMenu();
                    break;
                case "Exit":
                    console.clear();
                    return
            }
        });
}

exports.mainMenu = mainMenu;
