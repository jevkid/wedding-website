import * as React from 'react';

export interface RadioProps {
  name: string;
  label: string;
  id: string;
  defaultValue: string;
  isChecked: boolean;
  plusOne: boolean;
  onChange?: (e: React.ChangeEvent, plusOne: string) => void;
}

export const Radio = (props: RadioProps) => {
  const { name, id, defaultValue, label, isChecked, plusOne, onChange } = props;
  const nameAsString = `${name}${plusOne ? '-plus-one' : ''}`;
  const idAsString = `${id}${plusOne ? '-plus-one' : ''}`;
  return (
    <>
      <input
        id={idAsString}
        type="radio"
        name={nameAsString}
        value={defaultValue}
        onChange={(e) => {
          if (onChange) {
            onChange(e, plusOne ? 'plusOne' : 'guest');
          }
        }}
      />
      <label htmlFor={idAsString}>{label}</label>
    </>
  );
};
