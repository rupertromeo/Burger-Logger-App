const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect((err) => {
    if(err) {
        console.log("error connecting: " + err.stack0);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;