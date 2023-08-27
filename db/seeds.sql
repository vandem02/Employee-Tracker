-- syntax
-- INSERT INTO #table_name (#column_names) VALUES 
-- ('#data'),
-- ('#data');


-- departments
INSERT INTO departments (name) VALUES
('Office'),
('Sales'),
('Tech');

-- roles
INSERT INTO roles (title, salary, department_id) VALUES
('Office Rep', 40000, department_id),
('Sales Person', '45000', department_id),
('Install Tech', 50000, department_id),
('Service Tech', 55000, department_id),
('Operartions', 65000, department_id);

-- employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('David', 'Liebherr', role_id, manager_id),
('John', 'Doe', role_id, manager_id),
('Ben', 'Garrison', role_id, manager_id),
('Danny', 'Greco', role_id, manager_id),
('Nancy', 'Desandras', role_id, manager_id),
('Russal', 'Zein', role_id, manager_id),
('Heather', 'Repp', role_id, manager_id);


