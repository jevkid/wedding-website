import { Outlet } from 'remix';
import styles from '../styles/rsvp.css';
import { AnimatePresence, motion } from 'framer-motion';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Rsvp() {
  return (
    <AnimatePresence>
      <motion.div
        className="rsvp__container"
        initial={{
          x: 550,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: 'spring',
          duration: 0.9,
        }}
      >
        <h1 className="rsvp__title">RSVP</h1>
        <main>
          <Outlet />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
