import { prisma } from "~/server/db/index.js";

export const createTweet = (tweetData) => {
  return prisma.tweet.create({
    data: tweetData,
  });
};

export const getTweets = (params = {}) => {
  return prisma.tweet.findMany({
    ...params,
  });
};
