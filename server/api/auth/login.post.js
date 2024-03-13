import { getUserByUsername } from "~/server/db/user";
import bcrypt from "bcrypt";
import { generateToken, sendRefreshToken } from "~/server/utils/jwt";
import { userTransform } from "~/server/transformers/userTransform";
import { createRefreshToken } from "~/server/db/refreshToken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is missing",
      })
    );
  }

  // if User registed
  const user = await getUserByUsername(username);
  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "User name or password not vaid",
      })
    );
  }

  // Compare password
  const isPasswordValid = bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "User name or password not vaid",
      })
    );
  }

  // Generate token
  // Access token
  // Refresh token
  const { accessToken, refreshToken } = generateToken(user);

  // Save refresh token to db
  await createRefreshToken(refreshToken, user.id);

  // Add http only cookie
  sendRefreshToken(event, refreshToken);

  return {
    accessToken,
    user: userTransform(user),
  };
});
