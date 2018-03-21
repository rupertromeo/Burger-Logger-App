// Require our file for mapping
const orm = require("../config/orm.js");

// Here we create our burgers object then include 
// functions for our all, create, and update to database commands
const burgers = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    create: (name, cb) => {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    update: (id, cb) => {
        let condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burgers;