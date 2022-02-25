import { RadioField } from './formElements/radio';

interface AccomProps {
  guestName: string;
  plusOneName?: string;
  previousOption?: string;
}

export const AccomForm = (props: AccomProps) => {
  return (
    <div>
      <h3 className="subtitle">
        {props.guestName} {props.plusOneName ? `& ${props.plusOneName}` : ''}
      </h3>
      <p>
        The venue has offered a set number of rooms for both the evening of the
        wedding and the days leading up to it. Rooms can be booked for £120 per
        night- please select below if you would potentially be interested and we
        will contact you with more information. You can view the venue{' '}
        <a href="https://www.thing.com" target="_blank">
          here
        </a>
        .
      </p>
      <div className="checkbox__container">
        <RadioField
          id="interested"
          label="Interested"
          name="accom-req"
          inputValue="interested"
          isChecked={props.previousOption === 'interested'}
        />
        <RadioField
          id="not-interested"
          label="Not interested"
          name="accom-req"
          inputValue="not-interested"
          isChecked={props.previousOption === 'not-interested'}
        />
        {/* if interested (optional) */}
      </div>
    </div>
  );
};
