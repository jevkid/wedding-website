import * as React from 'react';
import { Form, redirect, useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { addGuest } from '~/admin';
import { getGuestById } from '~/guests';
import GuestForm from './guestForm';

export let action = async ({ request }: any) => {
  let formData = await request.formData();
  const guestName = formData.get('guest_name');
  const plusOne = formData.get('plus_one');
  const inviteCode = formData.get('invite_code');
  const eveOnly = formData.get('eve_only');
  const emptyPlusOne = formData.get('empty_plus_one');

  let errors: { name?: boolean; slug?: boolean } = {};

  if (!guestName) errors.name = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  await addGuest(
    guestName,
    inviteCode,
    plusOne,
    eveOnly === 'yes',
    emptyPlusOne === 'yes'
  );

  return redirect(`/admin`);
};

export let loader = async ({ params }: any) => {
  invariant(params.slug, 'expected params.slug');
  return getGuestById(params.slug);
};

export default function EditGuest() {
  let guest = useLoaderData();

  const [guestName, setGuestName] = React.useState<string>(
    guest.guestName || ''
  );
  const [plusOneName, setPlusOneName] = React.useState<string>(
    guest.plusOne || ''
  );
  const [inviteCode, setInviteCode] = React.useState<string>(
    guest.inviteCode || ''
  );

  const createInviteCode = () => {
    if (guestName) {
      const splitName = guestName.split(' ');
      let inviteCode = '';
      if (splitName && splitName.length > 1) {
        inviteCode = `${splitName[0].charAt(0)}${splitName[1]}`;
      }
      setInviteCode(inviteCode);
    }
  };

  const handlePlusOneName = () => {
    // set the plus one name based on the guests name
    setPlusOneName(`${guestName} (+1)`);
  };

  return (
    <Form method="post">
      <div className="admin__form">
        <h1>Edit guest</h1>
        <div className="admin__form--input">
          <label htmlFor="guest_name">Guest name: </label>
          <input
            type="text"
            id="guest_name"
            name="guest_name"
            onChange={(e) => setGuestName(e.target.value)}
            defaultValue={guest.guest_name}
          />
        </div>
        <div className="admin__form--input">
          <label htmlFor="">Invite code: </label>
          <input
            type="text"
            id="invite_code"
            name="invite_code"
            defaultValue={inviteCode}
            onFocus={() => createInviteCode()}
          />
        </div>
        <div className="admin__form--input">
          <p>Empty plus one?</p>
          <div className="radioContainer">
            <div className="radioContainer--option">
              <input
                type="radio"
                id="empty_plus_one_yes"
                name="empty_plus_one"
                value="yes"
                onChange={() => {
                  handlePlusOneName();
                }}
                defaultChecked={guest.emptyPlusOne}
              />
              <label htmlFor="empty_plus_one_yes">Yes: </label>
            </div>
            <div className="radioContainer--option">
              <input
                type="radio"
                id="empty_plus_one_no"
                name="empty_plus_one"
                value="no"
                defaultChecked={!!guest.emptyPlusOne}
              />
              <label htmlFor="empty_plus_one_no">No: </label>
            </div>
          </div>
        </div>
        <div className="admin__form--input">
          <label htmlFor="">Plus one: </label>
          <input
            type="text"
            id="plus_one"
            name="plus_one"
            defaultValue={plusOneName}
          />
        </div>
        <div className="admin__form--input">
          <p>Evening only?</p>
          <div className="radioContainer">
            <div className="radioContainer--option">
              <input
                type="radio"
                id="rsvp_yes"
                name="eve_only"
                value="yes"
                defaultChecked={guest.eveOnly}
              />
              <label htmlFor="eve_only_yes">Yes: </label>
            </div>
            <div className="radioContainer--option">
              <input
                type="radio"
                id="eve_only_no"
                name="eve_only"
                value="no"
                defaultChecked={!!guest.eveOnly}
              />
              <label htmlFor="eve_only_no">No: </label>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
