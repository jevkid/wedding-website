import { PrismaClient } from "@prisma/client";
import { getGuestById } from "./guests";
import { GuestsModel } from "./types";

const prisma = new PrismaClient();

export async function addGuest(guest: GuestsModel) {
  await prisma.$connect();

  await prisma.guests.create({
    data: {
      id: guest.id,
      accom_req: guest.accom_req || '',
      dietary_req: guest.dietary_req || '',
      dietary_req_other: guest.dietary_req_other || '',
      group: guest.group,
      guest_name: guest.guest_name,
      invite_code: guest.invite_code,
      meal_choice: guest.meal_choice || '',
      notes: guest.notes || '',
      rsvp: guest.rsvp,
    }
  });

  prisma.$disconnect();

  return getGuestById(guest.id);
}

export async function removeGuest(guestId: string) {
  await prisma.$connect();

  await prisma.guests.delete({
    where: {
      id: guestId
    }
  });

  prisma.$disconnect();
}