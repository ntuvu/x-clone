import { prisma } from "./index.js";

export const createRefreshToken = (refreshToken, userId) => {
  const token = {
    token: refreshToken,
    userId: userId,
  };
  
  return prisma.refreshToken.create({
    data: token,
  });
};

export const getRefreshTokenByToken = (token) => {
  return prisma.refreshToken.findUnique({
    where: {
      token,
    },
  });
}