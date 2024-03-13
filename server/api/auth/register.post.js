import { createUser } from "~/server/db/user";
import { userTransform } from "~/server/transformers/userTransform";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, email, password, repeatPassword, name } = body;

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Password do not match",
      })
    );
  }

  const user = {
    username,
    email,
    password,
    name,
    profileImage: "https://picsum.photos/200/200",
  };

  const createdUser = await createUser(user);
  return {
    body: userTransform(createdUser),
  };
});
