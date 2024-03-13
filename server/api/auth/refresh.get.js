import { getRefreshTokenByToken } from "~/server/db/refreshToken";
import { decodeRefreshToken, generateToken } from "~/server/utils/jwt";
import { getUserById } from "~/server/db/user";

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event);

  const refreshToken = cookies.refreshToken;

  const rToken = await getRefreshTokenByToken(refreshToken);

  if (!rToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "No refresh token",
      })
    );
  }

  const token = decodeRefreshToken(refreshToken);

  try {
    const user = await getUserById(token.userId);

    const { accessToken } = generateToken(user);

    return { accessToken: accessToken };
  } catch (error) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Something went wrong",
      })
    );
  }
});
