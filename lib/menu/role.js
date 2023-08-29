const Role = require("../Role");
const Dpt = require("../Dpt");
const inquirer = require("inquirer");
const menu = require("./menu");

function viewRoles() {
  const role = new Role();
  role
    .getAll()
    .then((rows) => {
      console.log(`
      == Roles ==
      `);
      console.table(rows);
    })
    .then(() => menu.mainMenu());
}

function addRole() {
  const dpt = new Dpt();
  dpt.getAll().then((dpts) => {
    inquirer
      .prompt([
        {
          type: "text",
          name: "newRoleName",
          message: "Enter role name:",
          validate: (rolename) => {
            if (!rolename) {
              console.log("Please enter a name");
              return false;
            }
            return true;
          },
        },
        {
          type: "text",
          name: "roleSalary",
          message: "Enter the annual salary (No commas or dollar signs):",
          validate: (salary) => {
            if (!salary) {
              console.log("Please enter an annual salary");
              return false
            }
            return true;
          },
        },
        {
          type: "list",
          name: "newRoleDpt",
          message: "Select a department to assign this role to.",
          choices: dpts.map((d) => {
            return `${d.id} - ${d.dpt_name}`;
          }),
        },
      ])
      .then(({ newRoleName, roleSalary, newRoleDpt }) => {
        let truncatedId = newRoleDpt.split(" ")[0];
        const role = new Role(null, newRoleName, roleSalary, truncatedId);
        role.addRole();
        console.clear();
        viewRoles();
        console.table("Added role \n");
      });
  });
}

module.exports = { viewRoles, addRole };
