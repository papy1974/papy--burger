// get my model for the SQL queries trough models/burger.js
const dbqueries = require("../models/burger.js");

// get express & router to create routes
const express = require("express");
const router = express.Router();

router.get("/", function(request, result) {
  // burgers is a GLOBAL array of objects.
  //   each object has:
  //     id:  integer - unique identifier
  //     burger_name:  string
  //     devoured:  boolean - true if eaten (devoured)
  dbqueries.getBurgers(function(data) {
    burgers = data;

    // render the html with the handlebars substitutions
    result.render("index", {
      burgers: burgers
    });
  });
});

// add new burger
router.post("/api/burgers", function(request, resultAPI) {
  dbqueries.addBurger(request.body.new_burger, function(result) {
    // result.insertId is part of the result returned.
    //    it has the id of burger being added
    resultAPI.json({ id: result.insertId });
  });
});

// change devoured to true for burger being enjoyed.
router.put("/api/burgers/:id", function(request, resultAPI) {
  // get the id of the burger being updated.
  var burger_id = request.params.id;

  dbqueries.eatBurger(burger_id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404 returned
      return resultAPI.status(404).end();
    // else 200 returned - all ok.
    } else {
      resultAPI.status(200).end();
    }
  });
});

// Export so other modules can use
module.exports = router;