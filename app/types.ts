export interface GuestsModel {
  id: string;
  invite_code: string;
  dietary_req: string;
  dietary_req_other: string;
  meal_choice: string;
  guest_name: string;
  rsvp: string;
  group: boolean;
  plus_one?: string;
  accom_req: string;
  notes: string;
}

export interface GuestModel {
  name: string;
  attending: string;
  meal_choice: string;
  dietary_prefs: string;
}

export interface InviteModel {
  id: string;
  name: string;
  guests: GuestModel[];
  notes: string;
  accommodation: string;
}