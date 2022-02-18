import { Outlet } from 'remix';
import styles from '../styles/admin.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Travel() {
  return (
    <div className="travel__container">
      <h1 className="travel__title">Travel</h1>
      <h4>How to get here, places to see, where to stay</h4>
      <main>
        {/* Outlet renders the /travel/index.jsx */}
        <Outlet />
      </main>
    </div>
  );
}
