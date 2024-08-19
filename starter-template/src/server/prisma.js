import { PrismaClient } from "@prisma/client";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
