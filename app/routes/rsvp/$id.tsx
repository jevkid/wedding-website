import invariant from 'tiny-invariant';
import {
  redirect,
  Form,
  useActionData,
  useTransition,
  useLoaderData,
} from 'remix';
import { getSingleGuest, updateGuest } from '~/guests';

export let loader = async ({ params }: any) => {
  invariant(params.id, 'expected params.id');
  return getSingleGuest(params.id);
};

export let action = async ({ request }: any) => {
  let formData = await request.formData();
  let guestId = formData.get('guestId');
  let rsvp = formData.get('rsvp');

  let errors: { name?: boolean; slug?: boolean } = {};

  if (!guestId) errors.name = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  await updateGuest(guestId, rsvp);

  return redirect('/');
};

export default function NewGuest() {
  const guest = useLoaderData();
  let errors = useActionData();
  let transition = useTransition();
  return (
    <Form method="post">
      <h1>{guest?.guest_name}</h1>
      <input type="hidden" name="guestId" value={guest.id} />
      <div className="checkbox__container">
        <input
          id="yes"
          type="radio"
          name="rsvp"
          value="yes"
          defaultChecked={guest.rsvp === 'yes'}
        />
        <label htmlFor="yes">Attending</label>
        <input
          id="no"
          type="radio"
          name="rsvp"
          value="no"
          defaultChecked={guest.rsvp === 'no'}
        />
        <label htmlFor="no">Unable to attend</label>
      </div>
      <p>
        <button type="submit">
          {transition.submission ? 'Searching...' : 'Continue'}
        </button>
      </p>
    </Form>
  );
}
