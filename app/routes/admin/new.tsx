import React from 'react';
import { redirect, Form } from 'remix';
import { addGuest } from '~/admin';
import { TextArea } from '~/components/formElements/textArea';

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

export default function NewGuest() {
  const [guestName, setGuestName] = React.useState<string>();
  const [plusOneName, setPlusOneName] = React.useState<string>();
  const [inviteCode, setInviteCode] = React.useState<string>();
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
        <h1>Add a guest</h1>
        <div className="admin__form--input">
          <label htmlFor="guest_name">Guest name: </label>
          <input
            type="text"
            id="guest_name"
            name="guest_name"
            onChange={(e) => setGuestName(e.target.value)}
          />
        </div>
        <div className="admin__form--input">
          <label htmlFor="">Invite code: </label>
          <input
            type="text"
            id="invite_code"
            name="invite_code"
            value={inviteCode}
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
              />
              <label htmlFor="empty_plus_one_yes">Yes: </label>
            </div>
            <div className="radioContainer--option">
              <input
                type="radio"
                id="empty_plus_one_no"
                name="empty_plus_one"
                value="no"
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
            value={plusOneName}
          />
        </div>
        <div className="admin__form--input">
          <p>Evening only?</p>
          <div className="radioContainer">
            <div className="radioContainer--option">
              <input type="radio" id="rsvp_yes" name="eve_only" value="yes" />
              <label htmlFor="eve_only_yes">Yes: </label>
            </div>
            <div className="radioContainer--option">
              <input type="radio" id="eve_only_no" name="eve_only" value="no" />
              <label htmlFor="eve_only_no">No: </label>
            </div>
          </div>
        </div>
        <button type="submit">Add user</button>
      </div>
    </Form>
  );
}
