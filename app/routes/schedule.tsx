import { Outlet } from 'remix';
import styles from '../styles/schedule.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Schedule() {
  return (
    <div className="schedule__container">
      <h1 className="schedule__title">Order of Events</h1>
      <p>
        While no one can be sure exactly what time things will start, below is
        an estimated schedule of events for your convenience.
      </p>
      <h4>Arrival</h4>
      <p>Guests to arrive, have a drink on us, and take their seats!</p>
      <h4>Ceremony</h4>
      <p>The actual wedding bit</p>
      <h4>Photographs</h4>
      <p>
        Guests to mingle and have drinks and canapes while the bride and groom
        have photos taken
      </p>
      <h4>Speeches</h4>
      <p>
        Everyone to find their seat in the marquee and listen to the speeches
      </p>
      <h4>Wedding Breakfast</h4>
      <p>Guests to enjoy a 3 course meal and drink</p>
      <h4>Cake</h4>
      <p>The bride and groom cut the cake!</p>
      <h4>Reception</h4>
      <p>Tables are put away and dancing shoes are put on</p>
      <h4>First dance</h4>
      <p>The bride and groom share their first dance as a married couple</p>
      <h4>Evening buffet</h4>
      <p>Enjoy a choice of hot food to soak up some of the booze</p>
      <h4>Carriages</h4>
      <p>
        Things start closing down, guests either head up to their rooms or take
        a taxi home
      </p>
      <main>
        {/* Outlet renders the /schedule/index.jsx */}
        <Outlet />
      </main>
    </div>
  );
}
