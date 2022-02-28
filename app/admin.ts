import { PrismaClient } from "@prisma/client";
import { findGuestByName } from "./guests";

const prisma = new PrismaClient();

export async function addGuest(guest_name: string, invite_code: string, rsvp?: string, plus_one?: string, diet_req?: string, diet_req_other?: string, meal_choice?: string, accom_req?: string, notes?: string) {
  await prisma.$connect();

  await prisma.guests.create({
    data: {
      accom_req: accom_req || '',
      dietary_req: diet_req || '',
      dietary_req_other: diet_req_other || '',
      guest_name: guest_name || '',
      invite_code: invite_code || '',
      meal_choice: meal_choice || '',
      plus_one: plus_one || '',
      notes: notes || '',
      rsvp: rsvp || '',
    }
  });

  if (plus_one) {
    await prisma.guests.create({
      data: {
        accom_req: accom_req || '',
        dietary_req: diet_req || '',
        dietary_req_other: diet_req_other || '',
        guest_name: plus_one || '',
        invite_code: invite_code || '',
        meal_choice: meal_choice || '',
        plus_one: guest_name || '',
        notes: notes || '',
        rsvp: rsvp || '',
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