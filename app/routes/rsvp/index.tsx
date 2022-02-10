import { Link, redirect, Form, useActionData, useTransition } from 'remix';
import { searchGuest } from '~/guests';

export let action = async ({ request }: any) => {
  let formData = await request.formData();
  let guestName = formData.get('guestName');

  let errors: { name?: boolean; slug?: boolean } = {};

  if (!guestName) errors.name = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  const { id } = await searchGuest(guestName);

  return redirect(`/rsvp/${id}`);
};

export default function RSVPIndex() {
  let errors = useActionData();
  let transition = useTransition();

  return (
    <Form method="post">
      <p>
        <label htmlFor="">
          Guest name: {errors?.title && <em>Name is required</em>}{' '}
          <input
            className="input"
            type="text"
            name="guestName"
            id="guestNameInput"
          />
        </label>
      </p>
      <p>
        <button type="submit">
          {transition.submission ? 'Searching...' : 'Enter'}
        </button>
      </p>
    </Form>
  );
}
