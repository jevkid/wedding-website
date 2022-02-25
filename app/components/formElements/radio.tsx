import * as React from 'react';

export interface RadioFieldProps {
  name: string;
  label: string;
  id: string;
  inputValue: string;
  isChecked?: boolean;
  plusOne?: boolean;
  handleChange?: () => void;
}

export const RadioField = (props: RadioFieldProps) => {
  const { name, id, inputValue, label, isChecked, plusOne, handleChange } =
    props;
  const nameAsString = `${name}${plusOne ? '-plus-one' : ''}`;
  const idAsString = `${id}${plusOne ? '-plus-one' : ''}`;
  return (
    <>
      <input
        id={idAsString}
        type="radio"
        name={nameAsString}
        value={inputValue}
        defaultChecked={isChecked}
        onChange={() => {
          if (handleChange) {
            handleChange();
          }
        }}
      />
      <label htmlFor={idAsString}>{label}</label>
    </>
  );
};
