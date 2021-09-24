let count = 140;

const counterText = document.getElementById("tweet-text");
$(document).ready(function () {
  // --- our code goes here ---

  const textArea = $("textarea#tweet-text");

  $("#tweet-text").on("input", function () {
    if (textArea.val().length >= 0 && textArea.val().length <= 140) {
      $(".counter").css({ color: "#56514a" });
      $(".counter").html(textArea.val().length);
    } else {
      $(".counter").html(textArea.val().length);
      $(".counter").css({ color: "red" });
    }
  });
});
