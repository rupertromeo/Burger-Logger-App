// Require the mysql package 
const mysql = require("mysql");

// Create our mysql server connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

// Check the status of our connection
connection.connect((err) => {
    if(err) {
        console.log("error connecting: " + err.stack0);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;