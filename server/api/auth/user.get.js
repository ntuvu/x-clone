import { userTransform } from "~/server/transformers/userTransform";

export default defineEventHandler(async (event) => {
  return {
    user: userTransform(event.context.auth?.user),
  };
});
