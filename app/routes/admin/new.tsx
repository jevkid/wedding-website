import {
  redirect,
  Form,
  useActionData,
  useTransition,
  useLoaderData,
} from 'remix';
import { addGuest } from '~/admin';
import { TextArea } from '~/components/formElements/textArea';
import { GuestsModel } from '~/types';

export let action = async ({ request }: any) => {
  let formData = await request.formData();
  const guestName = formData.get('guest_name');
  const rsvp = formData.get('rsvp');
  const diet = formData.get('dietary-req');
  const dietOther = formData.get('dietary-req-other');
  const meal = formData.get('meal-choice');
  const accom = formData.get('accom-req');
  const notes = formData.get('notes');

  let errors: { name?: boolean; slug?: boolean } = {};

  if (!guestName) errors.name = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  await addGuest(guestName, rsvp, diet, dietOther, meal, accom, notes);

  return redirect(`/admin`);
};

// accom_req: guest.accom_req || '',
// dietary_req: guest.dietary_req || '',
// dietary_req_other: guest.dietary_req_other || '',
// group: guest.group,
// guest_name: guest.guest_name,
// invite_code: guest.invite_code,
// meal_choice: guest.meal_choice || '',
// notes: guest.notes || '',
// rsvp: guest.rsvp,

export default function NewGuest() {
  return (
    <Form method="post">
      <div className="admin__form">
        <div className="admin__form--input">
          <label htmlFor="guest_name">Guest name: </label>
          <input type="text" id="guest_name" name="guest_name" />
        </div>
        <div className="admin__form--input">
          <label htmlFor="">Invite code: </label>
          <input type="text" id="invite_code" name="invite_code" />
        </div>
        <div className="admin__form--input">
          <label htmlFor="">Plus one: </label>
          <input type="text" id="plus_one" name="plus_one" />
        </div>
        <div className="admin__form--input">
          <label htmlFor="">RSVP: </label>
          <input type="text" id="rsvp" name="rsvp" />
        </div>
        <div className="admin__form--input">
          <label htmlFor="">Meal choice: </label>
          <input type="text" id="meal_choice" name="meal_choice" />
        </div>
        <div className="admin__form--input">
          <label htmlFor="">Diet requirements: </label>
          <input type="text" id="dietary_req" name="dietary_req" />
        </div>
        <div className="admin__form--input">
          <TextArea
            id="dietary_req_other"
            name="dietary_req_other"
            label="Diet requirements (other):"
          />
        </div>
        <div className="admin__form--input">
          <TextArea id="notes" name="notes" label="Notes:" />
        </div>
        <button type="submit">Add user</button>
      </div>
    </Form>
  );
}
