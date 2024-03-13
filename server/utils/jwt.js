import jwt from "jsonwebtoken";

const config = useRuntimeConfig();

const generateAccessToken = (user) => {
  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: "30m",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
    expiresIn: "10h",
  });
};

export const generateToken = (user) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

export const sendRefreshToken = (event, token) => {
  setCookie(event, "refreshToken", token, {
    httpOnly: true,
    sameSite: true,
  });
};

export const decodeRefreshToken = (token) => {
  try {
    return jwt.verify(token, config.jwtRefreshSecret);
  } catch (error) {
    return null;
  }
};

export const decodeAccessToken = (token) => {
  try {
    return jwt.verify(token, config.jwtAccessSecret);
  } catch (error) {
    return null;
  }
};
