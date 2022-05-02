import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';

export interface TimelineProps {
  schedule: ScheduledEvents[];
}

export interface ScheduledEvents {
  title: string;
  startTime: Date;
  endTime?: Date;
  icon: string;
  description: string;
}

export const Timeline = (props: TimelineProps) => {
  const { schedule } = props;

  return (
    <motion.div
      className="timeline"
      initial={{
        height: 0,
      }}
      animate={{
        height: 1900,
        transition: {
          type: 'ease',
          duration: 2.5,
        },
      }}
    >
      <ul>
        {schedule.map((point, index) => (
          <motion.li
            key={point.title}
            initial={{
              x: index % 2 ? 200 : -150,
            }}
            whileInView={{
              x: 0,
            }}
            transition={{
              type: 'spring',
              duration: 1,
            }}
          >
            <div className="description">
              <img src={point.icon} />
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
            <div className="time">
              <h4>{format(point.startTime, 'HH:mm')}</h4>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
