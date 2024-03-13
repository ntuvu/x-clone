import {prisma} from "~/server/db/index.js";

export const createMediaFile = (mediaFile) => {
    return prisma.mediaFile.create({
        data: mediaFile,
    })
};


