import * as React from 'react';
import styles from '../styles/common.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export interface AccordionProps {
  title: string;
}

export const Accordion: React.FC<AccordionProps> = (props) => {
  const [contentShown, setContentShown] = React.useState<boolean>(false);
  return (
    <div className="accordion">
      <div
        className={`accordion__title${contentShown ? '--open' : ''}`}
        onClick={() => setContentShown(!contentShown)}
      >
        {props.title}{' '}
        <i className={`arrow ${contentShown ? 'up' : 'down'}`}></i>
      </div>
      {contentShown && (
        <div className="accordion__content">{props.children}</div>
      )}
    </div>
  );
};
