import GoogleMap, { Bounds } from 'google-map-react';
import * as React from 'react';
import { Marker } from './marker';
import { MarkerInfoWindow } from './markerInfoWindow';
import { GoogleMaps, Result } from './types';

interface NeighbourhoodMapProps {
  thing?: any;
}

export const NeighbourhoodMap = (props: NeighbourhoodMapProps) => {
  const CARDIFF_CENTRE = { lat: 51.479935, lng: -3.177038 };
  const [places, setPlaces] = React.useState<Result[]>([]);
  React.useEffect(() => {
    fetch('places.json')
      .then((response) => response.json())
      .then((data) => setPlaces(data.results));
  }, []);

  return (
    <div className="neighbourhood__container">
      {/* <MarkerInfoWindow> */}
      <GoogleMap
        bootstrapURLKeys={{
          key: 'AIzaSyBQQPaLKPwR7CR3Z7JOB0JcNYckZsaqSq4',
          language: 'en-gb',
          region: 'en-gb',
        }}
        defaultZoom={10}
        defaultCenter={CARDIFF_CENTRE}
        yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
      >
        {places.map((place) => (
          <Marker
            key={place.id}
            altText={place.name}
            lat={place.geometry.location.lat}
            lng={place.geometry.location.lng}
          />
        ))}
      </GoogleMap>
      {/* </MarkerInfoWindow> */}
    </div>
  );
};
