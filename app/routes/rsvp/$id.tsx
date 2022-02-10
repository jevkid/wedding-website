import invariant from 'tiny-invariant';
import {
  redirect,
  Form,
  useActionData,
  useTransition,
  useLoaderData,
} from 'remix';
import { getSingleGuest } from '~/guests';

export let loader = async ({ params }: any) => {
  invariant(params.id, 'expected params.id');
  return getSingleGuest(params.edit);
};

// export let action = async ({ request }: any) => {
//   let formData = await request.formData();
//   let guestName = formData.get('guestName');

//   let errors: { name?: boolean; slug?: boolean } = {};

//   if (!guestName) errors.name = true;

//   if (Object.keys(errors).length) {
//     return errors;
//   }

//   await searchGuest(guestName);

//   return redirect('/');
// };

export default function NewGuest() {
  const guest = useLoaderData();
  let errors = useActionData();
  let transition = useTransition();
  return (
    <Form method="post">
      <h1>{guest?.guest_name}</h1>
      <h3>RSVP: (yes) (no)</h3>
      <p>
        <button type="submit">
          {transition.submission ? 'Searching...' : 'Enter'}
        </button>
      </p>
    </Form>
  );
}
