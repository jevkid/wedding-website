import * as React from 'react';

interface MarkerProps {
  altText: string;
  lat: number;
  lng: number;
  handleClick?: () => void;
}
export const Marker = ({ altText, handleClick }: MarkerProps) => {
  return (
    <div
      className="maps__marker"
      aria-labelledby={altText}
      onClick={handleClick}
    ></div>
  );
};
