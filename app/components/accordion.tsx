import { motion, AnimatePresence } from 'framer-motion';
import * as React from 'react';
import styles from '../styles/common.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export interface AccordionProps {
  title: string;
  maxHeight: number;
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
      <AnimatePresence initial={false}>
        {contentShown && (
          <motion.div
            className="accordion__content"
            key="content"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: props.maxHeight,
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              type: 'ease',
            }}
          >
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
