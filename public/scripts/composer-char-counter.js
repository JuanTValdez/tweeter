// Increase and decrease character counter.
// Changes to red if greater than 140 chars.

let count = 104;

$(document).ready(function () {
  const textArea = $("textarea#tweet-text");

  $("#tweet-text").on("input", function () {
    let counter = count - textArea.val().length;

    if (counter >= 0) {
      $(".counter").html(counter);
      $(".counter").css({ color: "#56514a" });
    } else {
      $(".counter").html(counter);
      $(".counter").css({ color: "red" });
    }
  });
});
