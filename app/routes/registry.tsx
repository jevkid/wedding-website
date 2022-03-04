import { Outlet } from 'remix';
import styles from '../styles/registry.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Registry() {
  return (
    <div className="registry__container">
      <h1 className="registry__title">Registry</h1>
      <h4>How to get here, places to see, where to stay</h4>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
