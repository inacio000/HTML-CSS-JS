-- Creating a database
CREATE DATABASE sdb;

-- Starting to use
USE sdb;

-- Creating a table
CREATE TABLE users(
	user_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    sallary INT,
    dob DATE,
    PRIMARY KEY(user_id)
);

-- Inserting data into table
INSERT INTO users(first_name, last_name, sallary, dob)
VALUE("Inacio", "Raimundo", 50000, "2000-03-21");

INSERT INTO users(first_name, last_name, sallary, dob)
VALUE("Luis", "Calela", 55000, "1997-06-17");

-- Entering bulk value
INSERT INTO users(first_name, last_name, sallary, dob)
VALUES("Isaias", "Ferreira", 40000, "2000-12-03"),
("Peeron", "Dicala", 40000, "2000-12-03"),
("Aboubakar", "Kaba", 50000, "2000-11-17");

-- Update table data
UPDATE users
SET sallary = 55000, first_name = "Inácio"
WHERE user_id = 1;

-- Deleting table data 
DELETE FROM users
WHERE user_id = 8;

UPDATE users
SET first_name = "Peterson"
WHERE user_id = 4;

SELECT * FROM users;