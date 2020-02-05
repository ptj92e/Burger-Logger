//This is adding a click event to the new burger button that takes the value of the input and sends that to the api routes
$("#newBurger").on("click", function (event) {
    event.preventDefault();

    let newBurger = {
        name: $("#burgerName").val().trim()
    };
    //This is using ajax to send a request to the server to determine what to do with the information
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("Made new burger");
            location.reload();
        }
    );
});
//This is establishing what to change the value of eaten to based off of what was clicked
$(".devour").on("click", function(event) {
    let id = $(this).data("id");
    let devoured = 1;
    //Since mySQL reads boolean logic as 1 for true and 0 for false, this sets whatever was clicked to 1 for true
    let devouredState = {
        eaten: devoured
    }
    //This sends that information to the server to determine which burger to change to devoured
    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: devouredState
    }).then(
        function() {
            console.log("This burger was eaten");
            location.reload();
        }
    );
});