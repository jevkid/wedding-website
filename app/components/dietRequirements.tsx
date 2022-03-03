import * as React from 'react';
import { CheckboxField } from './formElements/checkbox';

interface DietReqProps {
  guestName: string;
  isPlusOne?: boolean;
  previousOptions?: string;
  previousOptionsOther?: string;
}

export const DietReqForm = (props: DietReqProps) => {
  const [guestDietOther, showGuestDietOther] = React.useState(
    props.previousOptions && props.previousOptions.indexOf('other') > -1
  );
  const [guestDietOptions, setGuestDietOptions] = React.useState<string[]>([]);
  const [guestDietOptionsString, setGuestDietOptionsString] =
    React.useState<string>(props.previousOptions || '');

  const handleDietOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    let currentGuestOptions = guestDietOptions;

    if (e.target.value === 'other') {
      showGuestDietOther(!guestDietOther);
    }

    if (e.target.checked) {
      currentGuestOptions.push(e.target.value);
    } else {
      currentGuestOptions = currentGuestOptions.filter(
        (value) => value !== e.target.value
      );
    }
    setGuestDietOptions(currentGuestOptions);

    const optionsAsString = currentGuestOptions.join(',');
    setGuestDietOptionsString(optionsAsString);
  };

  return (
    <div>
      <h3 className="subtitle">{props.guestName}</h3>
      <input
        type="hidden"
        id={`dietary-req${props.isPlusOne ? '-plus-one' : ''}`}
        name={`dietary-req${props.isPlusOne ? '-plus-one' : ''}`}
        defaultValue={guestDietOptionsString}
      />
      <div className="checkbox__container">
        <CheckboxField
          id="vegan"
          label="Vegan"
          name="diet-req"
          inputValue="vegan"
          plusOne={!!props.isPlusOne}
          isChecked={guestDietOptionsString.indexOf('vegan') > -1}
          handleChange={(e) => handleDietOptions(e)}
        />
        <CheckboxField
          id="gluten-free"
          label="Gluten free"
          name="diet-req"
          inputValue="gluten-free"
          plusOne={!!props.isPlusOne}
          isChecked={guestDietOptionsString.indexOf('gluten-free') > -1}
          handleChange={(e) => handleDietOptions(e)}
        />
        <CheckboxField
          id="dairy-free"
          label="Dairy free"
          name="diet-req"
          inputValue="dairy-free"
          plusOne={!!props.isPlusOne}
          isChecked={guestDietOptionsString.indexOf('dairy-free') > -1}
          handleChange={(e) => handleDietOptions(e)}
        />
        <CheckboxField
          id="nuts"
          label="Nut allergy"
          name="diet-req"
          inputValue="nuts"
          plusOne={!!props.isPlusOne}
          isChecked={guestDietOptionsString.indexOf('nuts') > -1}
          handleChange={(e) => handleDietOptions(e)}
        />
        <CheckboxField
          id="other"
          label="Other"
          name="diet-req"
          inputValue="other"
          isChecked={guestDietOptionsString.indexOf('other') > -1}
          plusOne={!!props.isPlusOne}
          handleChange={(e) => handleDietOptions(e)}
        />
      </div>
      {guestDietOther && (
        <>
          <label
            htmlFor={`diet-req-other${props.isPlusOne ? '-plus-one' : ''}`}
          >
            Other requirements:
          </label>
          <input
            type="text"
            name={`diet-req-other${props.isPlusOne ? '-plus-one' : ''}`}
            id={`diet-req-other${props.isPlusOne ? '-plus-one' : ''}`}
            placeholder="Enter any dietary requirements here..."
            className="text-input"
            defaultValue={props.previousOptionsOther}
          />
        </>
      )}
    </div>
  );
};
