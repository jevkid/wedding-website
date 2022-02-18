import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getGuests() {
  await prisma.$connect();

  const allGuests = await prisma.guests.findMany();

  prisma.$disconnect();

  console.log(allGuests);
  return allGuests;
}

export async function getSingleGuest(id: string) {
  await prisma.$connect();

  const guest = await prisma.guests.findFirst({
    where: {
      id: id
    }
  });

  return guest;
}

export async function searchGuest(guestName: string) {
  await prisma.$connect();

  const foundName = await prisma.guests.findFirst({
    where: {
      guest_name: guestName
    }
  });
  console.log('guestName', guestName);
  console.log('foundName', foundName);

  let id = foundName?.id;
  let guest = foundName?.guest_name;
  console.log(id, guest);
  return {id, guest};
}

export async function updateGuest(guestId: string, rsvp: string) {
  await prisma.$connect();

  console.log('updating guest id', guestId);

  await prisma.guests.update({
    where: {
      id: guestId
    },
    data: {
      rsvp: rsvp
    }
  });

  prisma.$disconnect();

  return getSingleGuest(guestId);
}