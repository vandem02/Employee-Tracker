
DROP DATABASE IF EXISTS application_db; -- DELETE DATA IF EXISTS
CREATE DATABASE application_db; -- CREATE DATABASE

USE application_db;

    -- office, tech, sales
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45),
    PRIMARY KEY (id)
    
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(45),
    salary DECIMAL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)

);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45),
    last_name VARCHAR(45),
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id)
);