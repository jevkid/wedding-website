import { Link } from 'remix';
import { useLoaderData } from 'remix';
import { GuestsModel } from '~/types';
import { getAllGuests } from '~/guests';

export let loader = () => {
  return getAllGuests();
};

export default function AdminIndex() {
  let guests = useLoaderData();
  return (
    <div className="admin__container">
      <div className="admin__container--row">
        <div className="admin__container--column">
          <h3>Invited</h3>
          <ul>
            {guests.map((guest: GuestsModel) => (
              <li key={guest.id}>{guest.guest_name}</li>
            ))}
          </ul>
        </div>
        <div className="admin__container--column">
          <h3>Guests</h3>
          <ul>
            {guests.map((guest: GuestsModel) => (
              <li key={guest.id}>
                {!guest.rsvp && (
                  <span>{guest.guest_name} hasn't RSVPed yet</span>
                )}
                {guest.rsvp === 'yes' && (
                  <span>{guest.guest_name} is attending!</span>
                )}
                {guest.rsvp === 'no' && (
                  <span>{guest.guest_name} is unable to attend :(</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="adminNewPostLink">
        <Link to="new">
          {' '}
          <button>Add new guest</button>
        </Link>
      </div>
    </div>
  );
}
