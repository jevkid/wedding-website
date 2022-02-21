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
  let plusOne;
  const guest = await prisma.guests.findFirst({
    where: {
      id: id
    }
  });

  if (guest?.group && guest.plus_one) {
    plusOne = await prisma.guests.findFirst({
      where: {
        guest_name: guest.plus_one
      }
    });
  }

  prisma.$disconnect();

  return { guest, plusOne };
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

  prisma.$disconnect();

  return {id, guest};
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

  prisma.$disconnect();

  return {id, guest};
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