import { motion, AnimatePresence } from 'framer-motion';
import * as React from 'react';
import styles from '../styles/common.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export interface AccordionProps {
  title: string;
}

const tagVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  collapsed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

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
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={tagVariants}
          >
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
