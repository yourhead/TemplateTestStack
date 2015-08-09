
// Page JS will add JS just once to the page.
// The id template here refers to the ID of the top level stack

// This template uses jQuery to change the top stack background color to pink

$( document ).ready(function() {
    console.log ("Page Top ID = %id%");
    console.log ("Page Path = %pagePath%");
    $("#%id%").css("background-color", "rgba(255,200,200,0.25)");
});