const inquirer = require('inquirer');
const cTable = require('console.table');
const departmentMenu = require('./routes/departmentroute.js')


const mainMenu = () => {
    console.log(`
=================
     Welcome
 -| MAIN MENU |-
=================
    `);
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuQuestion',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role'
                ]
            }
        ])
        // using the switch method instead of if/else
        .then(({ menuQuestion }) => {
            switch (menuQuestion) {
                case 'View all departments':
                    console.clear()
                    departmentMenu()
                    break;
                case 'View all roles':
                    console.clear()
                    console.log('All Roles')
                    break;
                case 'View all employees':
                    console.clear()
                    console.log('All Employees')
                    break;
                case 'Add a department':
                    console.clear()
                    console.log('Add a department')
                    break;
                case 'Add a role':
                    console.clear()
                    console.log('Add a role')
                    break;
                case 'Add an employee':
                    console.clear()
                    console.log('Add an employee')
                    break;
                case 'Update an employee role':
                    console.clear()
                    console.log('Update an employee role')
                    break;

            }

        })
        .catch((err) => {
            console.log(err)
        })

};

module.exports = mainMenu;