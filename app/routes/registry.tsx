import { Outlet } from 'remix';
import styles from '../styles/registry.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Registry() {
  return (
    <div className="registry__container">
      <h1 className="registry__title">Registry</h1>
      <h4>Nice way to say that no gifts are required</h4>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
