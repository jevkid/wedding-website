import * as React from 'react';

export interface TextAreaProps {
  name: string;
  label: string;
  id: string;
  plusOne?: boolean;
  defaultValue?: string;
  handleChange?: () => void;
}

export const TextArea = (props: TextAreaProps) => {
  const { name, id, label, defaultValue, plusOne, handleChange } = props;
  const nameAsString = `${name}${plusOne ? '-plus-one' : ''}`;
  const idAsString = `${id}${plusOne ? '-plus-one' : ''}`;
  return (
    <>
      <label htmlFor={idAsString}>{label}</label>
      <textarea
        id={idAsString}
        name={nameAsString}
        defaultValue={defaultValue}
        onChange={() => {
          if (handleChange) {
            handleChange();
          }
        }}
      />
    </>
  );
};
