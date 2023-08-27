
import mysql from 'mysql2'; // Use ES6 import/export

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'application_db'
});

export {connection};

