import { format } from 'date-fns';
import styles from '../styles/schedule.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

interface ScheduledEvents {
  title: string;
  startTime: Date;
  endTime?: Date;
  icon: string;
  description: string;
}

const schedule: ScheduledEvents[] = [
  {
    title: 'Arrival',
    startTime: new Date('June 11, 2023 12:45'),
    endTime: new Date('June 11, 2023 13:30'),
    icon: '',
    description: 'Welcome drinks and getting ready for the ceremony.',
  },
  {
    title: 'Ceremony',
    startTime: new Date('June 11, 2023 13:00'),
    endTime: new Date('June 11, 2023 13:30'),
    icon: '',
    description: 'Megan and Simon get married!',
  },
  {
    title: 'Photographs and drinks reception',
    startTime: new Date('June 11, 2023 13:30'),
    endTime: new Date('June 11, 2023 15:30'),
    icon: '',
    description:
      'The wedding party sneaks away for photos while the guests enjoy a champagne reception.',
  },
  {
    title: 'Wedding breakfast',
    startTime: new Date('June 11, 2023 15:30'),
    endTime: new Date('June 11, 2023 17:30'),
    icon: '',
    description: 'Time to sit down and enjoy a 3-course dinner.',
  },
  {
    title: 'Speeches & Toast',
    startTime: new Date('June 11, 2023 17:30'),
    endTime: new Date('June 11, 2023 18:30'),
    icon: '',
    description:
      'Listen to those closest to the bride and groom tell embarassing stories.',
  },
  {
    title: 'Cake cutting',
    startTime: new Date('June 11, 2023 18:30'),
    endTime: new Date('June 11, 2023 19:00'),
    icon: '',
    description: "It's time to cut the cake!",
  },
  {
    title: 'First dance',
    startTime: new Date('June 11, 2023 19:30'),
    endTime: new Date('June 11, 2023 19:30'),
    icon: '',
    description: 'The newlyweds have their first dance.',
  },
  {
    title: 'Drinks and dancing',
    startTime: new Date('June 11, 2023 19:30'),
    icon: '',
    description: 'Grab a few drinks and put your dancing shoes on!',
  },
  {
    title: 'Buffet',
    startTime: new Date('June 11, 2023 20:00'),
    icon: '',
    description: 'Enjoy a buffet dinner to pad your stomach from the alcohol. ',
  },
  {
    title: 'Carriages',
    startTime: new Date('June 11, 2023 00:00'),
    icon: '',
    description:
      'Time to grab your coats and head home (or to your hotel room!)',
  },
];

export default function Schedule() {
  return (
    <div className="schedule__container">
      <h1 className="schedule__title">Order of Events</h1>
      <p>
        While no one can be sure <i>exactly</i> what the day will hold, below is
        an estimated schedule of events for your information.
      </p>
      <div className="timeline">
        <ul>
          {schedule.map((point) => (
            <li key={point.title}>
              <div className="description">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
              <div className="time">
                <h4>{format(point.startTime, 'HH:mm')}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
