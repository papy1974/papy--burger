// get my orm modules
const orm = require("../config/orm.js");

// code to call ORM functions using burger specific input for the ORM

const dbqueries = {

  // get all the burgers from the database
  getBurgers: function(cb) {
    // the table name "burgers" is passed in;
    //   the rows of the table are returned in "results"
    orm.selectAll("burgers", function(results) {
      burgers = results;
      cb(results);
    });
  },  // end of getBurgers

  // add a new burger to the database
  // burger_name has the name of the burger being added
  addBurger: function(burger_name, cb) {
    orm.insertOne("burgers", ["burger_name"], [burger_name], function(results) {
      cb(results);
    });
  },  // end of addBurger

  // change a burger to devoured
  // id is the identifier of the burger where devoured is set to TRUE
  eatBurger: function(id, cb) {
    orm.updateOne("burgers", id, "devoured", true, function(results) {
      cb(results);
    });
  }  // end of eatBurger

};

// make available to other modules and export dbqueries.
module.exports = dbqueries;