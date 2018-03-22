const connection = require("./connection.js");

function insertQuestionMark(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    const arr = [];

    for (let key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

const orm = {
    all: function(input, cb) {
        let queryString = "SELECT * FROM " + input + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insert: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += insertQuestionMark(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (er, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSQL(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;