import styles from '../styles/schedule.css';
import { Timeline, ScheduledEvents } from '~/components/timeline';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const schedule: ScheduledEvents[] = [
  {
    title: 'Arrival',
    startTime: new Date('June 11, 2023 12:45'),
    endTime: new Date('June 11, 2023 13:30'),
    icon: '/img/arrival.png',
    description: 'Welcome drinks and getting ready for the ceremony.',
  },
  {
    title: 'Ceremony',
    startTime: new Date('June 11, 2023 13:00'),
    endTime: new Date('June 11, 2023 13:30'),
    icon: '/img/wedding.png',
    description: 'Megan and Simon get married!',
  },
  {
    title: 'Photographs and drinks reception',
    startTime: new Date('June 11, 2023 13:30'),
    endTime: new Date('June 11, 2023 15:30'),
    icon: '/img/photos.png',
    description:
      'The wedding party sneaks away for photos while the guests enjoy a champagne reception.',
  },
  {
    title: 'Wedding breakfast',
    startTime: new Date('June 11, 2023 15:30'),
    endTime: new Date('June 11, 2023 17:30'),
    icon: '/img/dinner.png',
    description: 'Time to sit down and enjoy a 3-course dinner.',
  },
  {
    title: 'Speeches & Toast',
    startTime: new Date('June 11, 2023 17:30'),
    endTime: new Date('June 11, 2023 18:30'),
    icon: '/img/drinks.png',
    description:
      'Listen to those closest to the bride and groom tell embarassing stories.',
  },
  {
    title: 'Cake cutting',
    startTime: new Date('June 11, 2023 18:30'),
    endTime: new Date('June 11, 2023 19:00'),
    icon: '/img/cake.png',
    description: "It's time to cut the cake!",
  },
  {
    title: 'First dance',
    startTime: new Date('June 11, 2023 19:00'),
    endTime: new Date('June 11, 2023 19:30'),
    icon: '/img/dance.png',
    description: 'The newlyweds have their first dance.',
  },
  {
    title: 'Buffet',
    startTime: new Date('June 11, 2023 19:30'),
    icon: '/img/buffet.png',
    description: 'Enjoy a buffet dinner to pad your stomach from the alcohol. ',
  },
  {
    title: 'Drinks and dancing',
    startTime: new Date('June 11, 2023 20:00'),
    icon: '/img/disco.png',
    description: 'Grab a few drinks and put your dancing shoes on!',
  },
  {
    title: 'Carriages',
    startTime: new Date('June 11, 2023 00:00'),
    icon: '/img/car.png',
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
      <Timeline schedule={schedule} />
      <div className="attributes">
        <div className="attributes__credit">
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/monkik" title="monkik">
            monkik
          </a>
          ,{' '}
          <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
            Eucalyp
          </a>
          ,{' '}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>
          ,{' '}
          <a
            href="https://www.flaticon.com/authors/good-ware"
            title="Good Ware"
          >
            Good Ware,
          </a>{' '}
          <a
            href="https://www.flaticon.com/free-icons/love-and-romance"
            title="love and romance icons"
          >
            Umeicon{' '}
          </a>
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
}
