import { Outlet } from 'remix';
import styles from '../styles/rsvp.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Rsvp() {
  return (
    <div className="rsvp__container">
      <h1 className="rsvp__title">RSVP</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
