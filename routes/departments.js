
import inquirer from "inquirer";

inquirer
    .prompt([
        {
            type: 'list',
            name: 'question1',
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
    .then((answers) => {
        console.log(answers)
    })
    .catch((err) => {
        console.log(err)
    })