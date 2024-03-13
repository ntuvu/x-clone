// Import PrismaClient from @prisma/client
import { PrismaClient } from "@prisma/client";

// Initialize the PrismaClient instance
const prisma = new PrismaClient();

// Export prisma for use in other parts of your application
export { prisma };
