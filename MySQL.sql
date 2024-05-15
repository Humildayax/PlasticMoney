DROP DATABASE IF EXISTS plasticmoney;
CREATE DATABASE plasticmoney;

USE plasticmoney;

CREATE TABLE users(
	id int auto_increment,
	cedula varchar(255),
	celular varchar(255),
	dinero decimal default 0,
    activa bool default 0,
    PRIMARY KEY (id)
);

-- DROP USER IF EXISTS  'guest'@'localhost';
-- CREATE USER 'guest'@'localhost' IDENTIFIED BY 'Password$321';
-- GRANT SELECT, INSERT, UPDATE, DELETE ON plasticmoney.users TO 'guest'@'localhost';