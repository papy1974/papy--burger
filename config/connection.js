// Connect NODE to MySQL
var mysql = require("mysql");

// Set up the connection with mysql
if (process.env.JAWSDB_URL){
connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12261974",
  database: "burgers_db"
});
}
// open connection
connection.connect();

module.exports = connection