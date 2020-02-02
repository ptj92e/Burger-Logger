$("#newBurger").on("click", function (event) {
    event.preventDefault();

    let newBurger = {
        name: $("#burgerName").val().trim()
    };

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

$(".devour").on("click", function(event) {
    let id = $(this).data("id");
    let devoured = 1;

    let devouredState = {
        eaten: devoured
    }

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