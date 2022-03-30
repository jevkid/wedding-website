import { Places } from '~/components/maps/custom/places';
import styles from '../styles/travel.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Travel() {
  return (
    <div className="travel__container">
      <h1 className="travel__title">Travel & Things to do</h1>
      {/* <Places /> */}
      <h3>Getting to Cardiff</h3>
      <h3>Getting to the venue</h3>
      <h3>Accommodation</h3>
      <h3>Activities, attractions, and things to do</h3>
      <h3>Getting around</h3>
    </div>
  );
}
