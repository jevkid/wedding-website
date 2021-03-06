import * as React from 'react';

export const Places = () => {
  let map: google.maps.Map;
  let service: google.maps.places.PlacesService;
  let infowindow: google.maps.InfoWindow;

  React.useEffect(() => {
    const mapEl = document.getElementById('map');
    if (document && mapEl) {
      initMap(mapEl);
    }
  }, []);

  const createMarker = (place: google.maps.places.PlaceResult) => {
    if (!place.geometry || !place.geometry.location) return;

    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
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
    const cardiff = new google.maps.LatLng(51.479935, -3.177038);
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(mapElement, {
      center: cardiff,
      zoom: 15,
    });

    initAutocomplete(map);

    const request = {
      location: cardiff,
      radius: 500,
      type: 'hotel',
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        for (let i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
        if (results && results[0].geometry?.location) {
          map.setCenter(results[0].geometry.location);
        }
      }
    });
  };

  const initAutocomplete = (map: google.maps.Map) => {
    // Create the search box and link it to the UI element.
    const input = document.getElementById('pac-input') as HTMLInputElement;
    const searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', () => {
      searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
    });

    let markers: google.maps.Marker[] = [];

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();

      if (places && places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();

      places?.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log('Returned place contains no geometry');
          return;
        }

        const icon = {
          url: place.icon as string,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };

        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
          })
        );

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  };

  return (
    <>
      <input
        id="pac-input"
        className="controls"
        type="text"
        placeholder="Search Box"
      />
      <div id="map" className="map"></div>
    </>
  );
};
