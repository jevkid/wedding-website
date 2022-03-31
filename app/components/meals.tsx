import React from 'react';
import { CheckboxField } from './formElements/checkbox';
import { starters, mains, desserts } from '../constants';

interface MealProps {
  guestName: string;
  isPlusOne?: boolean;
  previousOptions?: string;
}

export const MealForm = (props: MealProps) => {
  const [mealPlanString, setMealPlanString] = React.useState<string>(
    props.previousOptions || ''
  );
  const [mealPlanOptions, setMealPlanOptions] = React.useState<string[]>([]);

  const handleMealOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    let currentGuestOptions = mealPlanOptions;

    if (e.target.checked) {
      currentGuestOptions.push(e.target.value);
    } else {
      currentGuestOptions = currentGuestOptions.filter(
        (value) => value !== e.target.value
      );
    }
    setMealPlanOptions(currentGuestOptions);

    const optionsAsString = currentGuestOptions.join(',');
    setMealPlanString(optionsAsString);
    console.log(optionsAsString);
  };

  return (
    <div>
      <input
        type="hidden"
        name={`meal-choice${props.isPlusOne ? '-plus-one' : ''}`}
        value={mealPlanString}
      />
      <h3 className="subtitle">{props.guestName}</h3>
      <h4>Starter</h4>
      <div className="meal__form--course">
        <div className="checkbox__container">
          <CheckboxField
            id={starters.one.id}
            label={starters.one.short}
            name="meal-choice-starter"
            inputValue={starters.one.id}
            plusOne={!!props.isPlusOne}
            handleChange={(e) => handleMealOptions(e)}
            isChecked={
              mealPlanString.indexOf(starters.one.id) > -1 ? true : false
            }
          />
          <p className="input-divider">or</p>
          <CheckboxField
            id={starters.two.id}
            label={starters.two.short}
            name="meal-choice-starter"
            inputValue={starters.two.id}
            plusOne={!!props.isPlusOne}
            handleChange={(e) => handleMealOptions(e)}
            isChecked={
              mealPlanString.indexOf(starters.two.id) > -1 ? true : false
            }
          />
        </div>
        <h4>Main</h4>
        <div className="meal__form--course">
          <div className="checkbox__container">
            <CheckboxField
              id={mains.one.id}
              label={mains.one.short}
              name="meal-choice-main"
              inputValue={mains.one.id}
              plusOne={!!props.isPlusOne}
              handleChange={(e) => handleMealOptions(e)}
              isChecked={
                mealPlanString.indexOf(mains.one.id) > -1 ? true : false
              }
            />
            <p className="input-divider">or</p>
            <CheckboxField
              id={mains.two.id}
              label={mains.two.short}
              name="meal-choice-main"
              inputValue={mains.two.id}
              plusOne={!!props.isPlusOne}
              handleChange={(e) => handleMealOptions(e)}
              isChecked={
                mealPlanString.indexOf(mains.two.id) > -1 ? true : false
              }
            />
          </div>
        </div>
        <h4>Dessert</h4>
        <div className="meal__form--course">
          <div className="checkbox__container">
            <CheckboxField
              id={desserts.one.id}
              label={desserts.one.short}
              name="meal-choice-dessert"
              inputValue={desserts.one.id}
              plusOne={!!props.isPlusOne}
              handleChange={(e) => handleMealOptions(e)}
              isChecked={
                mealPlanString.indexOf(desserts.one.id) > -1 ? true : false
              }
            />
            <p className="input-divider">or</p>
            <CheckboxField
              id={desserts.two.id}
              label={desserts.two.short}
              name="meal-choice-dessert"
              inputValue={desserts.two.id}
              plusOne={!!props.isPlusOne}
              handleChange={(e) => handleMealOptions(e)}
              isChecked={
                mealPlanString.indexOf(desserts.two.id) > -1 ? true : false
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
