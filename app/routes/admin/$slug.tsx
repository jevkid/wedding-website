import { useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { getSingleGuest } from '~/guests';

export let loader = async ({ params }: any) => {
  invariant(params.slug, 'expected params.slug');
  return getSingleGuest(params.slug);
};

export default function GuestSlug() {
  let guest = useLoaderData();
  return (
    <div>
      <h3>Name: {guest.name}</h3>
      <h3>Attending?: {guest.rsvp}</h3>
      <h3>Meal choice: {guest.meal}</h3>
      <h3>Dietary requirement: {guest.dietary_req}</h3>
    </div>
  );
}
