interface MealProps {
  guestName: string;
  isPlusOne?: boolean;
}

export const MealForm = (props: MealProps) => {
  return (
    <div>
      <h3 className="subtitle">{props.guestName}</h3>
      <div className="checkbox__container">
        <input
          id={`chicken${props.isPlusOne ? '-plus-one' : ''}`}
          type="radio"
          name={`diet-req${props.isPlusOne ? '-plus-one' : ''}`}
          value="chicken"
        />
        <label htmlFor={`chicken${props.isPlusOne ? '-plus-one' : ''}`}>
          Chicken
        </label>
        <input
          id={`veggie${props.isPlusOne ? '-plus-one' : ''}`}
          type="radio"
          name={`diet-req${props.isPlusOne ? '-plus-one' : ''}`}
          value="veggie"
        />
        <label htmlFor={`veggie${props.isPlusOne ? '-plus-one' : ''}`}>
          Veggie
        </label>
      </div>
    </div>
  );
};
