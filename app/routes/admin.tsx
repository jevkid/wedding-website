import { getGuests } from '~/guests';
import { Outlet, useLoaderData } from 'remix';
import { GuestsModel } from '~/types';
import styles from '../styles/admin.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export let loader = () => {
  return getGuests();
};

export default function Admin() {
  let guests = useLoaderData();
  return (
    <div className="admin__container">
      <h1 className="admin__title">Admin</h1>
      <h3>Invited</h3>
      <ul>
        {guests.map((guest: GuestsModel) => (
          <li key={guest.id}>{guest.guest_name}</li>
        ))}
      </ul>
      <h3>Guests</h3>
      <ul>
        {guests.map((guest: GuestsModel) => (
          <li key={guest.id}>
            {!guest.rsvp && <span>{guest.guest_name} hasn't RSVPed yet</span>}
            {guest.rsvp === 'yes' && (
              <span>{guest.guest_name} is attending!</span>
            )}
            {guest.rsvp === 'no' && (
              <span>{guest.guest_name} is unable to attend :(</span>
            )}
          </li>
        ))}
      </ul>
      <main>
        {/* Outlet renders the /admin/index.jsx */}
        <Outlet />
      </main>
    </div>
  );
}
