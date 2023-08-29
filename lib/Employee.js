const db = require("../db/connection");

class Employee {
    constructor(id, first_name, last_name, role_id, mgr_id) {
        (this.id = id), (this.first_name = first_name), (this.last_name = last_name), (this.role_id = role_id), (this.mgr_id = mgr_id);
    }
    getAll() {
        const sql = `
        SELECT e.id, e.first_name, e.last_name, r.title, d.dpt_name, r.salary
        FROM employee e
        LEFT JOIN role r ON e.role_id = r.id
        LEFT JOIN department d ON r.dpt_id = d.id`;
        return db
            .promise()
            .query(sql)
            .then(([row]) => {
                return row;
            });
    }

    addEmployee() {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, mgr_id)
    VALUES (?,?,?,?)`;
        const params = [this.first_name, this.last_name, this.role_id, this.mgr_id];
        return db.promise().query(sql, params);
    }

    getEmployeeById() {
        const sql = `SELECT * FROM employee WHERE id = '${this.id}'`;
        return db
            .promise()
            .query(sql)
            .then(([row]) => {
                return row;
            });
    }

    updateEmployee() {
        const sql = `UPDATE employee SET role_id = ? WHERE id = '${this.id}'`;
        const params = [this.role_id];
        return db
            .promise()
            .query(sql, params)
            .then(([rows]) => {
                return rows;
            });
    }
}

module.exports = Employee;
