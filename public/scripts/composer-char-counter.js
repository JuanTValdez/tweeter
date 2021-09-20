let count = 140;

const counterText = document.getElementById("tweet-text");
$(document).ready(function () {
  // --- our code goes here ---

  const textArea = $("textarea#tweet-text");

  $("#tweet-text").on("input", function () {
    if (textArea.val().length > 0 && count > 0) {
      // count =  $("textarea#tweet-text").val().length;
      count = count - 1;
      $(".counter").html(count);
      // console.log(textArea.val().length);

      // console.log("Length of textarea: " + this.value.length);
    } else $(".counter").css({ color: "red" });
  });
});
