CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INTEGER NOT NULL auto_increment PRIMARY KEY,
    burger_name VARCHAR(75) NOT NULL,
    devoured BOOLEAN DEFAULT "0"
);