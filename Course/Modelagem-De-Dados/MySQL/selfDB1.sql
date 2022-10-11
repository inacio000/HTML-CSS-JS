CREATE DATABASE sdb2;

USE sdb2;

CREATE TABLE users1(
	user_id INT NOT NULL AUTO_INCREMENT,
    first_name CHAR(150),
    last_name CHAR(150),
    age INT,
    sallary INT,
    dob DATE,
	PRIMARY KEY(user_id)
);

INSERT INTO users1(first_name, last_name, age, sallary, dob)
VALUE("Inacio", "Raimundo", 22, 60000, "2000-02-04");

SELECT * FROM users1;