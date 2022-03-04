import { Link } from 'react-router-dom';
import styles from '../styles/index.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Index() {
  return (
    <div className="app__main">
      <Link to="rsvp" className="app__seal">
        <span className="app__seal--text">RSVP</span>
      </Link>
      <div className="app__main--hero"></div>
      <div className="app__main--info"></div>
    </div>
  );
}
