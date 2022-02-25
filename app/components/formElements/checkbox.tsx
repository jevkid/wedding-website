import * as React from 'react';

export interface CheckboxFieldProps {
  name: string;
  label: string;
  id: string;
  inputValue: string;
  isChecked?: boolean;
  plusOne?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxField = (props: CheckboxFieldProps) => {
  const { name, id, inputValue, label, isChecked, plusOne, handleChange } =
    props;
  const nameAsString = `${name}${plusOne ? '-plus-one' : ''}`;
  const idAsString = `${id}${plusOne ? '-plus-one' : ''}`;
  return (
    <>
      <input
        id={idAsString}
        type="checkbox"
        name={nameAsString}
        value={inputValue}
        defaultChecked={isChecked}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor={idAsString}>{label}</label>
    </>
  );
};
