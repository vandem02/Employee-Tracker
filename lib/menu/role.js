const Role = require("../Role");
const Dpt = require("../Dpt");
const inquirer = require("inquirer");
const menu = require("./menu");

function viewRoles() {
  const role = new Role();
  role
    .getAll()
    .then((rows) => {
      console.log(".::All Roles::.");
      console.table(rows);
    })
    .then(() => menu.mainMenu());
}

function addRoleMenu() {
  const dpt = new Dpt();
  dpt.getAll().then((dpts) => {
    inquirer
      .prompt([
        {
          type: "text",
          name: "newRoleName",
          message: "What is the name of this new role?",
          validate: (rolename) => {
            if (!rolename) {
              console.log("Please enter a name for this role!");
              return false;
            }
            return true;
          },
        },
        {
          type: "text",
          name: "roleSalary",
          message: "How much does this role make per year?",
          validate: (salary) => {
            if (!salary) {
              console.log("Please enter a yearly salary for this role!");
            }
            return true;
          },
        },
        {
          type: "list",
          name: "newRoleDpt",
          message: "What department does this role belong to?",
          choices: dpts.map((d) => {
            return `${d.id}--${d.dpt_name}`;
          }),
        },
      ])
      .then(({ newRoleName, roleSalary, newRoleDpt }) => {
        let truncatedId = newRoleDpt.charAt(0)
        const role = new Role(null, newRoleName, roleSalary, truncatedId);
        role.addRole();
        console.clear();
        viewRoles();
        console.table("Added role \n");
      });
  });
}

module.exports = { viewRoles, addRoleMenu };
