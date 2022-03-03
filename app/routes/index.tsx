import { Link } from 'react-router-dom';
import styles from '../styles/index.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Index() {
  return (
    <div className="app__main">
      <div className="app__main--hero"></div>
      <div className="app__main--info">
        <Link to="rsvp">RSVP here</Link>
      </div>
    </div>
  );
}
