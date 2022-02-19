import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllGuests() {
  await prisma.$connect();

  const allGuests = await prisma.guests.findMany();

  prisma.$disconnect();

  return allGuests;
}

export async function getGuestById(id: string) {
  await prisma.$connect();

  const guest = await prisma.guests.findFirst({
    where: {
      id: id
    }
  });

  prisma.$disconnect();

  return guest;
}

export async function findGuestByName(guestName: string) {
  await prisma.$connect();

  const foundGuest = await prisma.guests.findFirst({
    where: {
      guest_name: guestName
    }
  });

  let id = foundGuest?.id;
  let guest = foundGuest?.guest_name;
  let plus_one = foundGuest?.plus_one;

  prisma.$disconnect();

  return {id, guest, plus_one};
}

export async function findGuestByCode(inviteCode: string) {
  await prisma.$connect();

  const foundGuest = await prisma.guests.findFirst({
    where: {
      invite_code: inviteCode
    }
  });

  let id = foundGuest?.id;
  let guest = foundGuest?.guest_name;
  let plus_one = foundGuest?.plus_one;

  prisma.$disconnect();

  return {id, guest, plus_one};
}

export async function updateGuest(guestId: string, rsvp: string) {
  await prisma.$connect();

  await prisma.guests.update({
    where: {
      id: guestId
    },
    data: {
      rsvp: rsvp
    }
  });

  prisma.$disconnect();

  return getGuestById(guestId);
}