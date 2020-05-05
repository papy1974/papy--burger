// Get my SQL connection.
const connection = require("../config/connection.js");

// methods to query SQL db
const orm = {
  // retrieve the whole table
  selectAll: function(table, cb) {
    // ?? is the table name
    const queryString = "SELECT * FROM ??;";
    connection.query(queryString, [table], function(error, result) {
      if (error) {throw error;}
      // return result, which is all the rows in the table
      cb(result);
    });
  },

  // insert a new row to the table;
  insertOne: function(table, columns, data, cb) {
    // first ?? is the table; (??) has the column names; (?) is the values
    queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [table, columns, data], 
      function(error, result) {
      if (error) {throw error;}
      cb(result);
    });
  },

  // Update one value of one row given the id
  updateOne: function(table, id, column, newvalue, cb) {
    // the first ?? is the table name;
    //  the next ?? is the column name;
    //   the first ? is the new value of the column;
    //    the next ? is id of the row to be updated.
    const queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";
    connection.query(queryString, [table, column, newvalue, id], 
      function(error, result) {
      if (error) {throw error;}
      cb(result);
    });
  }
};

// Make these available to other modules.
module.exports = orm;