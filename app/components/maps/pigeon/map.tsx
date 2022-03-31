import * as React from 'react';
import { Map, Marker } from 'pigeon-maps';
import { hotels } from '../../../constants';

export const PigeonMap = () => {
  return (
    <Map height={300} defaultCenter={[51.479935, -3.177038]} defaultZoom={15}>
      {hotels.map((hotel) => (
        <Marker width={50} anchor={[hotel.location.lat, hotel.location.lng]} />
      ))}
    </Map>
  );
};
