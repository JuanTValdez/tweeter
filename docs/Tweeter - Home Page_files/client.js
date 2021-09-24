/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const loadTweets = function () {
    $.ajax({
      url: "/tweets",
      method: "GET",
      datatype: "json",
      success: (tweets) => {
        renderTweets(tweets);
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  const renderTweets = function (tweetData) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    const reversedObj = tweetData.reverse();

    $container = $("#tweets-container");
    $container.empty();
    for (let item of reversedObj) {
      const $tweet = createTweetElement(item);

      $container.append($tweet);
    }
  };

  const createTweetElement = function (tweetObj) {
    const $name = $("<span>").text(" " + `${tweetObj.user.name}`);
    const $avatars = $(
      `<img src="${tweetObj.user.avatars}" width:"${10}" height:"${25}">`
    );
    const $handle = $("<h5>").text(`${tweetObj.user.handle}`);
    const $content = $("<div>")
      .addClass("output-tweet")
      .text(`${tweetObj.content.text}`);
    const $createdAt = $("<h6>").text(
      `${timeago.format(tweetObj.user.created_at)}`
    );

    const $article = $("<article>").addClass("article-tweet");
    const $header = $("<header>").addClass("tweet-header");
    const $footer = $("<footer>");
    const $div = $("<div>");
    const $h6 = $("<h6>").addClass("icons-flex");
    const $h5 = $("<h5>");
    const $flag = $("<span>").addClass("fas fa-flag icon");
    const $retweet = $("<span>").addClass("fas fa-retweet icon");
    const $heart = $("<span>").addClass("fas fa-heart icon");

    $article.append(
      $header.append($h5.append($avatars, $name), $handle),

      $content,
      $footer.append(
        $div.append($createdAt),
        $h6.append($flag, $retweet, $heart)
      )
    );
    return $article;
  };

  const form = $("#createTweetForm");
  form.on("submit", function (event) {
    event.preventDefault();

    const serializedData = $(this).serialize();

    if (serializedData.length === 5) {
      $("#slide-up").slideDown();
    } else if (serializedData.length > 145) {
      $("#slide-up").slideDown();
    } else {
      $.post("/tweets", serializedData).then((res) => {
        $("#slide-up").slideUp();
        $("#tweet-text").val("");
        loadTweets();
      });
    }
  });

  loadTweets();
});
