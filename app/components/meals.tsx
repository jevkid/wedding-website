import { RadioField } from './formElements/radio';

interface MealProps {
  guestName: string;
  isPlusOne?: boolean;
  previousOption?: string;
}

export const MealForm = (props: MealProps) => {
  return (
    <div>
      <h3 className="subtitle">{props.guestName}</h3>
      <div className="checkbox__container">
        <RadioField
          id="chicken"
          label="Chicken"
          name="meal-choice"
          inputValue="chicken"
          plusOne={!!props.isPlusOne}
        />
        <p className="input-divider">or</p>
        <RadioField
          id="veggie"
          label="Veggie"
          name="meal-choice"
          inputValue="veggie"
          plusOne={!!props.isPlusOne}
        />
      </div>
    </div>
  );
};
