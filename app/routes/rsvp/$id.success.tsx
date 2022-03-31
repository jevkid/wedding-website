import invariant from 'tiny-invariant';
import {
  redirect,
  Form,
  useActionData,
  useTransition,
  useLoaderData,
} from 'remix';
import { getGuestById } from '~/guests';
import React from 'react';

export let loader = async ({ params }: any) => {
  invariant(params.id, 'expected params.id');
  return getGuestById(params.id);
};

export default function Success() {
  const { guest } = useLoaderData();
  let errors = useActionData();
  let transition = useTransition();

  return (
    <div className="rsvp__container--success">
      <h1>Success! Thanks for your RSVP {guest?.guest_name}!</h1>
    </div>
  );
}
