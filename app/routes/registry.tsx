import { LinkPreview } from '@dhaiwat10/react-link-preview';
import styles from '../styles/registry.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Registry() {
  return (
    <div className="registry__container">
      <h1 className="registry__title">Registry</h1>
      <p>
        Your company is all we could wish for on our special day. However, if
        you wish to honour us with a gift, we are registered at{' '}
        <a href="https://prezola.com/wishlists/10255214/">Prezola</a>
      </p>
      <LinkPreview
        url="https://prezola.com/wishlists/10255214/"
        width="400px"
      />
    </div>
  );
}
