import { prisma } from "./index.js";
import bcrypt from "bcrypt";

export const createUser = (user) => {
  const finalUser = {
    ...user,
    password: bcrypt.hashSync(user.password, 10),
  };

  return prisma.user.create({
    data: finalUser,
  });
};

export const getUserByUsername = (username) => {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
};

export const getUserById = (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}