import { Places } from '~/components/maps/google/places';
import styles from '../styles/travel.css';
import { hotels, attractions, venueLocation } from '~/constants';
import { Accordion } from '~/components/accordion';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Travel() {
  return (
    <div className="travel__container">
      <h1 className="travel__title">Travel & Things to do</h1>
      <Accordion title="Getting to the venue" maxHeight={645}>
        <p>
          Llechwen Hall Hotel is situated upon Mount Llanfabon and is
          approximately a 20 minute drive from junction 32 of the M4 motorway.
        </p>
        <p>
          Leave the M4 at Junction 32 and follow signs for A470/Merthyr Tydfil.
          Follow the A470 and after approximately 9 miles, at the roundabout
          take the 3rd exit onto the A472 heading to Ystrad Mynach. At the next
          roundabout take the 3rd exit onto the A4054. Take the first left, and
          follow signs for Llechwen Hall Hotel.
        </p>
        <Places
          mapId="map-3"
          places={venueLocation}
          zoom={13}
          centre={{ lat: 51.641327116818566, lng: -3.308188930345505 }}
        />
      </Accordion>
      <Accordion title="Accommodation" maxHeight={434}>
        <Places mapId="map-1" places={hotels} />
      </Accordion>
      <Accordion title="Getting to Cardiff from abroad" maxHeight={675}>
        <h4>Fly into London Heathrow (LHR)</h4>
        <p>
          Flying into Heathrow is <i>usually</i> the cheapest option, but will
          require you to take either a bus or train to Cardiff. You can buy a
          really cheap bus ticket through{' '}
          <a
            href="https://uk.megabus.com/?gclid=Cj0KCQjw_4-SBhCgARIsAAlegrWaaecvTGg1eaRFJtwtvc7biGrrLksUcZaQGqz_H9vYuB6DrbD7L7caAgWVEALw_wcB"
            target="_blank"
          >
            Megabus
          </a>
          , or slightly more expensive through{' '}
          <a
            href="https://www.nationalexpress.com/en/airports/heathrow"
            target="_blank"
          >
            National Express
          </a>
          . You can also opt to take a train which will get you there a bit
          quicker (roughly 2 hours). Tickets can be purchased from a variety of
          places online, I tend to use{' '}
          <a href="https://www.thetrainline.com/en-us" target="_blank">
            Trainline
          </a>
          .
        </p>
        <p>
          The bus can take anywhere from 3.5 to 4.5 hours. If you book a
          Megabus, you'll need to get from London Heathrow to Victoria station-
          this will be an additional cost. However, if you book a National
          Express, you'll be able to catch the bus directly from London Heathrow
          airport.
        </p>

        <h4>Fly into Bristol (BRS)</h4>
        <p>
          Flying into Bristol gets you slightly closer to Cardiff, but you
          likely won't find as many direct flights here. Similarly to London
          Heathrow, you can get either a train or bus to Cardiff. You can buy a
          really cheap bus ticket through{' '}
          <a
            href="https://uk.megabus.com/?gclid=Cj0KCQjw_4-SBhCgARIsAAlegrWaaecvTGg1eaRFJtwtvc7biGrrLksUcZaQGqz_H9vYuB6DrbD7L7caAgWVEALw_wcB"
            target="_blank"
          >
            Megabus
          </a>
          , or slightly more expensive through{' '}
          <a
            href="https://www.nationalexpress.com/en/airports/heathrow"
            target="_blank"
          >
            National Express
          </a>
          . For trains, tickets can be purchased from a variety of places
          online. I tend to use{' '}
          <a href="https://www.thetrainline.com/en-us" target="_blank">
            Trainline
          </a>
          .
        </p>
        <p>
          From Bristol airport, it's roughly a 1.5 to 2.5 hour bus or train
          journey to Cardiff. If you opt for the train, you'll need to take a
          bus to get to from the airoprt regardless.
        </p>

        <h4>Fly into Cardiff (CWL)</h4>
        <p>
          Depending on where you're flying from, you're unlikely to find a
          direct flight into Cardiff- however, it will obviously require a
          shorter bus/train journey to get to the city centre. From the airport,
          there's a bus which charges less than £10 to get you to the city
          centre (takes less than 40 minutes). Depending on what date you're
          getting in, we may even be able to come pick you up from the airport
          if you let us know!
        </p>
      </Accordion>

      <Accordion
        title="Activities, attractions, and things to do"
        maxHeight={475}
      >
        <Places mapId="map-2" places={attractions} zoom={12} />
      </Accordion>
      <Accordion title="Getting around" maxHeight={130}>
        <p>
          Cardiff is easy to get around- there are buses, trains, and hire bikes
          to take you wherever you need to go, and most areas of central Cardiff
          are easily walkable. You can download the{' '}
          <a href="https://www.cardiffbus.com/app" target="_blank">
            Cardiff Bus app
          </a>{' '}
          to get directions, tickets, and timetables. Similarly, you can
          download the{' '}
          <a
            href="https://www.thetrainline.com/information/apps"
            target="_blank"
          >
            Trainline app
          </a>
          .
        </p>
      </Accordion>
    </div>
  );
}
