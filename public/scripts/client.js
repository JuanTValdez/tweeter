/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const tweetData = {
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
  };

  const createTweetElement = function (tweetObject) {
    const $name = $("<h6>").text(`${tweetData.user.name}`);
    const $avatars = $("<span>").text(`${tweetData.user.avatars}`);
    const $handle = $("<h5>").text(`${tweetData.user.handle}`);
    const $content = $("<p>").text(`${tweetData.content.text}`);
    const $createAt = $("<h6>").text(`${tweetData.created_at}`);

    const $article = $("<article>").addClass("article-tweet");

    $article.append($name, $avatars, $handle, $content);
    console.log($article);
    return tweetObject;
  };

  // <section>
  //   <article class="article-tweet">
  //     <header class="tweet-header">
  //       <h5>
  //         {" "}
  //         <span class="fas fa-poo"></span>Newton
  //       </h5>
  //       <h5>@SirIsaac</h5>
  //     </header>
  //     <div class="tweet">
  //       If I have seen further it is by standing on the shoulders of giants
  //     </div>
  //     <footer>
  //       <h6> 10 days ago</h6>
  //       <h6 class="icons-flex">
  //         <span class="fas fa-flag icon"></span>
  //         <span class="fas fa-retweet icon"></span>
  //         <span class="fas fa-heart icon"></span>
  //       </h6>
  //     </footer>
  //   </article>
  // </section>;

  const $tweet = createTweetElement(tweetData);

  // console.log($tweet);

  $("#tweets-container").append($tweet);
});
