const Dpt = require("../Dpt");
const inquirer = require("inquirer");
const menu = require("./menu");

function viewDepartments() {
    let department = new Dpt();
    department
        .getAll()
        .then((rows) => {
            console.log(`
    == Departments ==
    `);
            console.table(rows);
        })
        .then(() => {
            menu.mainMenu();
        });
}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: "text",
                name: "newDptName",
                message: "What is the name of the new department?",
                validate: (dptname) => {
                    return dptname ? true : false;
                },
            },
        ])
        .then(({ newDptName }) => {
            const dpt = new Dpt(null, newDptName);
            dpt.addDpt();
            console.clear();
            viewDepartments();
            console.table("Added department \n");
        });
}

module.exports = { viewDepartments, addDepartment };
