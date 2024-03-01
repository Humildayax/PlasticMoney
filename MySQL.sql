DROP DATABASE IF EXISTS `ecobottles`;
CREATE DATABASE `ecobottles`;

USE `ecobottles`;

CREATE TABLE `users`(
  id int NOT NULL AUTO_INCREMENT,
  cedula varchar(255) DEFAULT NULL,
  celular varchar(255) DEFAULT NULL,
  dinero decimal DEFAULT NULL,
  PRIMARY key (`id`)
);
