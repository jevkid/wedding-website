import { Outlet } from 'remix';
import styles from '../styles/admin.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Admin() {
  return (
    <main>
      {/* Outlet renders the /admin/index.jsx */}
      <Outlet />
    </main>
  );
}
