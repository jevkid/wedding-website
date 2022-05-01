import * as React from 'react';

interface GuestFormProps {
  guestName?: string;
  plusOne?: string;
  inviteCode?: string;
  eveOnly?: boolean;
  emptyPlusOne?: boolean;
}

export default function GuestForm(props: GuestFormProps) {
  const [guestName, setGuestName] = React.useState<string>(
    props.guestName || ''
  );
  const [plusOneName, setPlusOneName] = React.useState<string>(
    props.plusOne || ''
  );
  const [inviteCode, setInviteCode] = React.useState<string>(
    props.inviteCode || ''
  );

  console.log(props);
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
    <>
      <div className="admin__form--input">
        <label htmlFor="guest_name">Guest name: </label>
        <input
          type="text"
          id="guest_name"
          name="guest_name"
          onChange={(e) => setGuestName(e.target.value)}
          defaultValue={guestName}
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
              defaultChecked={props.emptyPlusOne}
            />
            <label htmlFor="empty_plus_one_yes">Yes: </label>
          </div>
          <div className="radioContainer--option">
            <input
              type="radio"
              id="empty_plus_one_no"
              name="empty_plus_one"
              value="no"
              defaultChecked={!!props.emptyPlusOne}
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
              defaultChecked={props.eveOnly}
            />
            <label htmlFor="eve_only_yes">Yes: </label>
          </div>
          <div className="radioContainer--option">
            <input
              type="radio"
              id="eve_only_no"
              name="eve_only"
              value="no"
              defaultChecked={!!props.eveOnly}
            />
            <label htmlFor="eve_only_no">No: </label>
          </div>
        </div>
      </div>
    </>
  );
}
