import * as React from 'react';
import styles from '../../../styles/travel.css';
import {
  initializeMap,
  initializePlaceDetails,
  initializeSearchInput,
  initializeSidePanel,
} from './mapFunctions';

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    {
      rel: 'script',
      href: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBQQPaLKPwR7CR3Z7JOB0JcNYckZsaqSq4&callback=initMap&libraries=places,geometry&solution_channel=GMP_QB_neighborhooddiscovery_v1_cADEF',
    },
  ];
}

export const NeighbourhoodMaps = () => {
  const configuration = {
    capabilities: {
      search: true,
      distances: false,
      directions: false,
      contacts: true,
      atmospheres: true,
      thumbnails: true,
    },
    pois: [
      { placeId: 'ChIJ4_5RJLccbkgRwSy8VeQlnOE' },
      { placeId: 'ChIJ2bdx468cbkgRc2a8GS-hBUQ' },
      { placeId: 'ChIJgf3G37EcbkgR6ShDlpTS4jk' },
      { placeId: 'ChIJy34izLscbkgRjrmqq9ULIxA' },
      { placeId: 'ChIJk8tiVqQcbkgR5qPLxeNE50E' },
      { placeId: 'ChIJBb7C2bMcbkgRDRo0LUmz58Q' },
      { placeId: 'ChIJCen4cqYcbkgRi_wXfzhogmw' },
      { placeId: 'ChIJIdnxqLAcbkgRSVFaQqmwRQI' },
      { placeId: 'ChIJ12_Zv7AcbkgRDu9C0oyRThA' },
      { placeId: 'ChIJI56CmzYDbkgRgC4VQu3CgPQ' },
      { placeId: 'ChIJoTvIg7ccbkgRv_hPotqu744' },
      { placeId: 'ChIJZ8CIe7EcbkgRiuS2rvneZuQ' },
      { placeId: 'ChIJrzHswrMcbkgRINUtqGYwXMU' },
      { placeId: 'ChIJEeiCmzYDbkgRvq-zbNuBeOs' },
      { placeId: 'ChIJYy_6xcccbkgRF-vKAeX-gsw' },
      { placeId: 'ChIJN1vNWbEcbkgRqmHOmot27ZQ' },
      { placeId: 'ChIJ4SIteLEcbkgRj_bt2GkwQDc' },
      { placeId: 'ChIJT77gJL0cbkgRSiPBhCE4Bp8' },
      { placeId: 'ChIJPRTkPM4cbkgRrtzgXIC7W-Q' },
      { placeId: 'ChIJb5eCiescbkgRL1XBvfYxaX8' },
      { placeId: 'ChIJSafHP7ccbkgRJYIfBtQM_RQ' },
      { placeId: 'ChIJMRXW7bQcbkgRqlKFvioNbq0' },
      { placeId: 'ChIJOaPJcqsdbkgRDk337VxnsFQ' },
    ],
    mapRadius: 2000,
    mapOptions: {
      center: { lat: 51.483707, lng: -3.1680962 },
      fullscreenControl: true,
      mapTypeControl: true,
      streetViewControl: false,
      zoom: 16,
      zoomControl: true,
      maxZoom: 20,
    },
    mapsApiKey: 'AIzaSyBQQPaLKPwR7CR3Z7JOB0JcNYckZsaqSq4',
  };

  const widget = this as any;
  const widgetEl = document.querySelector('.neighborhood-discovery');

  widget.center = configuration.mapOptions.center;
  widget.places = configuration.pois || [];

  // Initialize core functionalities -------------------------------------

  initializeMap(configuration, widget, widgetEl);
  initializePlaceDetails(widget);
  initializeSidePanel(widget, widgetEl);

  // Initialize additional capabilities ----------------------------------

  initializeSearchInput(widget, widgetEl);

  // Initializer function definitions ------------------------------------

  return (
    <>
      <div className="neighborhood-discovery">
        <div className="places-panel panel no-scroll">
          <header className="navbar">
            <div className="search-input">
              <input
                className="place-search-input"
                placeholder="Search nearby places"
              />
              <button className="place-search-button">
                <img
                  src="https://fonts.gstatic.com/s/i/googlematerialicons/search/v11/24px.svg"
                  alt="search"
                />
              </button>
            </div>
          </header>
          <div className="results">
            <ul className="place-results-list"></ul>
          </div>
          <button className="show-more-button sticky">
            <span>Show More</span>
            <img
              className="right"
              src="https://fonts.gstatic.com/s/i/googlematerialicons/expand_more/v11/24px.svg"
              alt="expand"
            />
          </button>
        </div>
        <div className="details-panel panel"></div>
        <div className="map"></div>
        <div className="photo-modal">
          <img alt="place photo" />
          <div>
            <button className="back-button">
              <img
                className="icon"
                src="https://fonts.gstatic.com/s/i/googlematerialicons/arrow_back/v11/24px.svg"
                alt="back"
              />
            </button>
            <div className="photo-text">
              <div className="photo-place"></div>
              <div className="photo-attrs">
                Photo by <span></span>
              </div>
            </div>
          </div>
        </div>
        <svg
          className="marker-pin"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="38"
          fill="none"
        >
          <path d="M13 0C5.817 0 0 5.93 0 13.267c0 7.862 5.59 10.81 9.555 17.624C12.09 35.248 11.342 38 13 38c1.723 0 .975-2.817 3.445-7.043C20.085 24.503 26 21.162 26 13.267 26 5.93 20.183 0 13 0Z" />
        </svg>
      </div>
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQQPaLKPwR7CR3Z7JOB0JcNYckZsaqSq4&callback=initMap&libraries=places,geometry&solution_channel=GMP_QB_neighborhooddiscovery_v1_cADEF"
        async
        defer
      ></script>
    </>
  );
};
