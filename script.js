console.log("hi");

$(document).ready(function() {
  $(".dot").hover(
    function() {
      $(this).css("background-color", "yellow");
    },
    function() {
      $(this).css("background-color", "white");
    }
  );
});
