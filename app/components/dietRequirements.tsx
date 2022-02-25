import * as React from 'react';

interface DietReqProps {
  guestName: string;
  isPlusOne?: boolean;
}

export const DietReqForm = (props: DietReqProps) => {
  const [guestDietOther, showGuestDietOther] = React.useState(false);
  const [plusOneDietOther, showPlusOneDietOther] = React.useState(false);
  const [guestDietOptions, setGuestDietOptions] = React.useState<string[]>([]);
  const [plusOneDietOptions, setPlusOneDietOptions] = React.useState<string[]>(
    []
  );
  const [guestDietOptionsString, setGuestDietOptionsString] =
    React.useState<string>('');
  const [plusOneDietOptionsString, setPlusOneDietOptionsString] =
    React.useState<string>('');

  const handleDietOptions = (
    e: React.ChangeEvent<HTMLInputElement>,
    guestType: 'guest' | 'plusOne'
  ) => {
    let currentGuestOptions = guestDietOptions;
    let currentPlusOneOptions = plusOneDietOptions;
    if (e.target.value === 'other' && guestType === 'guest') {
      showGuestDietOther(!guestDietOther);
    } else if (e.target.value === 'other' && guestType === 'plusOne') {
      showPlusOneDietOther(!plusOneDietOther);
    }
    if (guestType === 'guest') {
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
    }
    if (guestType === 'plusOne') {
      if (e.target.checked) {
        currentPlusOneOptions.push(e.target.value);
      } else {
        currentPlusOneOptions = currentPlusOneOptions.filter(
          (value) => value !== e.target.value
        );
      }
      setPlusOneDietOptions(currentPlusOneOptions);
      const optionsAsString = currentPlusOneOptions.join(',');
      setPlusOneDietOptionsString(optionsAsString);
    }
  };

  return (
    <div>
      <h3 className="subtitle">{props.guestName}</h3>
      <input
        type="hidden"
        id={`dietary-req${props.isPlusOne ? '-plus-one' : ''}`}
        name={`dietary-req${props.isPlusOne ? '-plus-one' : ''}`}
        defaultValue={
          props.isPlusOne ? plusOneDietOptionsString : guestDietOptionsString
        }
      />
      <div className="checkbox__container">
        <input
          id={`vegan${props.isPlusOne ? '-plus-one' : ''}`}
          type="checkbox"
          name={`diet-req${props.isPlusOne ? '-plus-one' : ''}`}
          value="vegan"
          onChange={(e) =>
            handleDietOptions(e, props.isPlusOne ? 'plusOne' : 'guest')
          }
        />
        <label htmlFor={`vegan${props.isPlusOne ? '-plus-one' : ''}`}>
          Vegan
        </label>
        <input
          id={`gluten-free${props.isPlusOne ? '-plus-one' : ''}`}
          type="checkbox"
          name={`diet-req${props.isPlusOne ? '-plus-one' : ''}`}
          value="gluten-free"
          onChange={(e) =>
            handleDietOptions(e, props.isPlusOne ? 'plusOne' : 'guest')
          }
        />
        <label htmlFor={`gluten-free${props.isPlusOne ? '-plus-one' : ''}`}>
          Gluten free
        </label>
        <input
          id={`dairy-free${props.isPlusOne ? '-plus-one' : ''}`}
          type="checkbox"
          name={`diet-req${props.isPlusOne ? '-plus-one' : ''}`}
          value="dairy-free"
          onChange={(e) =>
            handleDietOptions(e, props.isPlusOne ? 'plusOne' : 'guest')
          }
        />
        <label htmlFor={`dairy-free${props.isPlusOne ? '-plus-one' : ''}`}>
          Dairy free
        </label>
        <input
          id={`nuts${props.isPlusOne ? '-plus-one' : ''}`}
          type="checkbox"
          name={`diet-req${props.isPlusOne ? '-plus-one' : ''}`}
          value="nuts"
          onChange={(e) =>
            handleDietOptions(e, props.isPlusOne ? 'plusOne' : 'guest')
          }
        />
        <label htmlFor={`nuts${props.isPlusOne ? '-plus-one' : ''}`}>
          Nut allergy
        </label>
        <input
          id={`other${props.isPlusOne ? '-plus-one' : ''}`}
          type="checkbox"
          name={`diet-req${props.isPlusOne ? '-plus-one' : ''}`}
          value="other"
          onChange={(e) =>
            handleDietOptions(e, props.isPlusOne ? 'plusOne' : 'guest')
          }
        />
        <label htmlFor={`other${props.isPlusOne ? '-plus-one' : ''}`}>
          Other
        </label>
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
          />
        </>
      )}
    </div>
  );
};
