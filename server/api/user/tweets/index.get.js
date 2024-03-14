import { getTweets } from "~/server/db/tweets.js";
import human from "human-time";

export default defineEventHandler(async (event) => {
  const tweets = await getTweets({
    include: {
      author: true,
      mediaFile: true,
      replies: {
        include: {
          author: true,
        },
      },
      replyTo: {
        include: {
          author: true,
        },
      },
    },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
  tweets.forEach((tweet) => {
    tweet.repliesCount = tweet.replies.length;
    tweet.postedAtHuman = human(tweet.createdAt);
    tweet.handle = "@" + tweet.author.username;
  });
  return {
    tweets: tweets,
  };
});
