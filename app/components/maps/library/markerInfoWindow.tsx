import * as React from 'react';

interface MarkerInfoWindowProps {
  children?: any;
}

export const MarkerInfoWindow = ({ children }: MarkerInfoWindowProps) => {
  return (
    <>
      <div className="neighborhood-discovery">
        {children}
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
