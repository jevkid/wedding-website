interface AccomProps {
  guestName: string;
  plusOneName?: string;
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
          . here
        </a>
      </p>
      <div className="checkbox__container">
        <input id="yes" type="radio" name="accom" value="yes" />
        <label htmlFor="yes">Interested</label>
        <input id="no" type="radio" name="accom" value="no" />
        <label htmlFor="no">Not interested</label>
        {/* if interested (optional) */}
      </div>
    </div>
  );
};
