import { PrismaClient } from "@prisma/client";
import { findGuestByName } from "./guests";

const prisma = new PrismaClient();
// guestName, inviteCode, plusOne, eveOnly, emptyPlusOne, rsvp
export async function addGuest(guest_name: string, invite_code: string, plus_one: string, eve_only: boolean, empty_plus_one?: boolean) {
  await prisma.$connect();

  await prisma.guests.create({
    data: {
      accom_req: '',
      dietary_req: '',
      dietary_req_other: '',
      guest_name: guest_name || '',
      invite_code: invite_code || '',
      meal_choice:'',
      plus_one: plus_one || '',
      notes: '',
      rsvp: '',
      eve_only: eve_only,
      empty_plus_one: empty_plus_one || false
    }
  });

  if (plus_one) {
    await prisma.guests.create({
      data: {
        accom_req: '',
        dietary_req: '',
        dietary_req_other: '',
        guest_name: plus_one || '',
        invite_code: invite_code || '',
        meal_choice: '',
        plus_one: guest_name || '',
        notes: '',
        rsvp: '',
        eve_only: eve_only
      }
    });
  }

  prisma.$disconnect();

  return findGuestByName(guest_name);
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