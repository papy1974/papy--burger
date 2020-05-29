$(function() {
    // if the devoured button (uneaten-li-btn) was clicked,
    // change it to eaten in the database and on the website.
    $(".uneaten-li-btn").on("click", function(event) {
      const id = $(this).data("id");
  
      // make it devoured (eaten)
      const devouredTrue = {
        devoured: true
      };
  
      // Send the PUT request by id by using ajax.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredTrue
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    // when submit button hit, add a new burger to the db & webpage by using on submit event.
    $(".new-burger-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      // get new burger name from the website by val.trim
      const newBurger = {
        new_burger: $("#burg").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });