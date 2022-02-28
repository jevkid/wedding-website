import { PrismaClient } from "@prisma/client";
import { GuestModel } from "./types";

const prisma = new PrismaClient();

export async function getInvites() {
  await prisma.$connect();

  const allInvites = await prisma.invites.findMany();

  prisma.$disconnect();

  return allInvites;
}

export async function getSingleInvite(id: string) {
  await prisma.$connect();

  const invite = await prisma.invites.findFirst({
    where: {
      id: id
    }
  });
  prisma.$disconnect();
  return invite;
}

export async function findInvite(inviteCode: string) {
  await prisma.$connect();
  const invite = await prisma.invites.findFirst({
      where: {
        code: inviteCode
      }
    });


  prisma.$disconnect();
  return invite?.id;
}

export async function updateInvite(inviteId: string, formData: GuestModel) {
  await prisma.$connect();

  await prisma.invites.update({
    where: {
      id: inviteId
    },
    data: formData
  });

  prisma.$disconnect();

  return getSingleInvite(inviteId);
}