import React from 'react';
import { redirect, Form } from 'remix';
import { addGuest } from '~/admin';
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

export default function NewGuest() {
  return (
    <Form method="post">
      <div className="admin__form">
        <h1>Add a guest</h1>
        <GuestForm />
        <button type="submit">Add user</button>
      </div>
    </Form>
  );
}
