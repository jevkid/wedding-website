import * as React from 'react';
import { Place } from './types';

export interface PlacesProps {
  mapId: string;
  places: Place[];
  centre?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

export const Places = (props: PlacesProps) => {
  let map: google.maps.Map;
  let infowindow: google.maps.InfoWindow;

  React.useEffect(() => {
    const mapEl = document.getElementById(props.mapId);
    if (document && mapEl) {
      initMap(mapEl);
    }
  }, []);

  const createMarker = (place: Place, infowindow: google.maps.InfoWindow) => {
    if (!place.location) return;

    const marker = new google.maps.Marker({
      map,
      position: place.location,
    });

    const contentString = `
      <div class="info-window">
        <h1 id="firstHeading" class="firstHeading">${place.name}</h1>
        <div class="content">
          <img src="${place.image}" style="width: auto; height: 150px;"/>
          <div class="description">
            <p>${place.desc}</p>
            <p>${place.address}</p>
            <p><a href="${place.website}" target="_blank">Book online</a> | <a href="${place.mapsLink}" target="_blank">Open in Google Maps</a></p>
          </div>
        </div>
      </div>`;

    infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, 'click', () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  };

  const initMap = (mapElement: HTMLElement) => {
    let centre = new google.maps.LatLng(51.479935, -3.177038);
    if (props.centre) {
      centre = new google.maps.LatLng(props.centre.lat, props.centre.lng);
    }

    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(mapElement, {
      center: centre,
      zoom: props.zoom || 15,
    });

    for (let i = 0; i < props.places.length; i++) {
      createMarker(props.places[i], infowindow);
    }
  };

  return <div id={props.mapId} className="map"></div>;
};
