import { redirect, Form, useActionData, useTransition } from 'remix';
import { findGuestByName, findGuestByCode } from '~/guests';

export let action = async ({ request }: any) => {
  let formData = await request.formData();
  let guestName = formData.get('guestName');
  let inviteCode = formData.get('inviteCode');
  let errors: { name?: boolean; slug?: boolean } = {};

  if (!inviteCode && !guestName) {
    errors.name = true;
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  const { id } = inviteCode
    ? await findGuestByCode(inviteCode)
    : await findGuestByName(guestName);

  return redirect(`/rsvp/${id}`);
};

export default function RSVPIndex() {
  let errors = useActionData();
  let transition = useTransition();

  return (
    <Form method="post">
      <p>
        If you're responding for you and a guest (or your family), you'll be
        able to RSVP for each person on your invitation.
      </p>
      <div className="rsvp__invites">
        <label htmlFor="guestName">
          <input
            className="input"
            type="text"
            name="guestName"
            id="guestNameInput"
            placeholder="Full name"
          />
        </label>
        <p className="input-divider">or</p>
        <label htmlFor="inviteCode">
          <input
            className="input"
            type="text"
            name="inviteCode"
            id="inviteCodeInput"
            placeholder="Invite code"
          />
        </label>
      </div>
      {errors?.name && <em>Name or invite code is required</em>}{' '}
      <div className="button__container">
        <button type="submit">
          {transition.submission ? 'Searching...' : 'Find your invitation'}
        </button>
      </div>
    </Form>
  );
}
