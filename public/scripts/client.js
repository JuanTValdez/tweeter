/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  // const tweetData = {
  //   user: {
  //     name: "Newton",
  //     avatars: "https://i.imgur.com/73hZDYK.png",
  //     handle: "@SirIsaac",
  //   },
  //   content: {
  //     text:
  //       "If I have seen further it is by standing on the shoulders of giants",
  //   },
  //   created_at: 1461116232227,
  // };

  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text:
          "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  const renderTweets = function (tweetData) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    for (let item of tweetData) {
      console.log(item);
      const $tweet = createTweetElement(item);

      $container = $("#tweets-container");
      $container.append($tweet);
    }
  };

  const createTweetElement = function (tweetObj) {
    const $name = $("<span>").text(" " + `${tweetObj.user.name}`);
    // const $avatars = $("<span>").text(`${tweetObj.user.avatars}`);
    const $avatars = $(
      `<img src="${tweetObj.user.avatars}" width:"${10}" height:"${25}">`
    );
    const $handle = $("<h5>").text(`${tweetObj.user.handle}`);
    const $content = $("<div>")
      .addClass("tweet")
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

    // uncomment to revert back to working.
    // $article.append($name, $avatars, $handle, $content, $createdAt);

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

  renderTweets(data);
});

// const $avatars = $("<span>").text(`${tweetData.user.avatars}`);
