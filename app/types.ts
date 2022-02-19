export interface GuestsModel {
  id: string;
  dietary_req: string;
  meal_choice: string;
  guest_name: string;
  rsvp: string;
  group: boolean;
  plusOne?: string;
}
