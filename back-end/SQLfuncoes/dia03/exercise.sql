CREATE DATABASE IF NOT EXISTS zoodb;

USE zoodb;

CREATE TABLE animal (
	animal_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    specimen VARCHAR(50),
    sex VARCHAR(10),
    age INT,
    location VARCHAR(50)
)ENGINE=InnoDB;

CREATE TABLE manager (
	manager_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE carer (
	carer_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES manager (manager_id)
)ENGINE=InnoDB;

CREATE TABLE animal_carer (
	animal_id INT NOT NULL,
    	carer_id INT NOT NULL,
	PRIMARY KEYS (animal_id, carer_id),	
	FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (carer_id) REFERENCES carer (carer_id)
)ENGINE=InnoDB;








