$(document).ready(function() {
    $(".text-center").on("click", function() {
        $(".overlay").fadeToggle('slow');
        $(".modal").animate(
            {
            opacity: "toggle",
            height: "toggle"
            },3000
        );
    });

    $(".close").on("click", function() {
        $(".overlay").fadeToggle('slow');
        $(".modal").animate(
            {
            opacity: "toggle",
            height: "toggle"
            },3000
        );               
    });

    $("a:contains(расписания туров)").on("click", function() {
        $(".overlay").fadeToggle('slow');
        $(".modal").animate(
            {
            opacity: "toggle",
            height: "toggle"
            },3000
        );               
    });

});