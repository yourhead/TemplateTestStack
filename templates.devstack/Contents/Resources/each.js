
// Each JS will add JS to the page for each stack instance on the page
// The id template here refers to the ID of stack instance

// This template uses jQuery to change the background of the stack to light blue

$( document ).ready(function() {
    console.log ("Instance ID = %id%");
    console.log ("Page Path = %pagePath%");
    $(".template").css("background-color", "rgba(200,200,255,0.25)");
});