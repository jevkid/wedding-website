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
        If you're responding for you and a guest (or your family), you'll be
        able to RSVP for your entire group.
      </p>
      <label htmlFor="guestName">
        <input
          className="input"
          type="text"
          name="guestName"
          id="guestNameInput"
          placeholder="Full name"
        />
        {errors?.name && <em>Name is required</em>}{' '}
      </label>
      <p>
        <button type="submit">
          {transition.submission ? 'Searching...' : 'Find your invitation'}
        </button>
      </p>
    </Form>
  );
}
