export type GoogleMaps = typeof google.maps;
export type Bounds = typeof google.maps.LatLngBounds | null;
export interface OpeningHours {
  weekday_text: any; //TODO
}

export interface StarIcon {
  rating: number;
  fullStarIcons: number[];
  halfStarIcons: number[];
  emptyStarIcons: number[];
}

export type MarkerIcons = Record<MarkerTypes, MarkerValues>;
export type MarkerTypes = "_default" | "restaurant" | "cafe" | "bar" | "park" | "stadium" | "museum" | "supermarket" | "clothing_store" | "shopping_mall" | "primary_school" | "secondary_school" | "tourist_attraction";
export type MarkerValues = 'circle' | 'restaurant' | 'local_cafe' | 'local_bar' | 'park' | 'sports_handball' | 'museum' | 'local_grocery_store' | 'local_mall' | 'local_mall' | 'school' | 'school' | 'local_see';

export interface Result {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    },
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      },
      southwest: {
        lat: number;
        lng: number;
      }
    }
  },
  icon: string;
  id: string;
  name: string;
  opening_hours: {
    open_now: boolean;
    weekday_text: [];
  },
  photos: [{
    height: number;
    html_attributions: HTMLAnchorElement[];
    photo_reference: string;
    width: number;
  }],
  place_id: string;
  price_level: number;
  rating: number;
  reference: string;
  types: [
    'restaurant',
    'food',
    'point_of_interest',
    'establishment'
  ]
}

export interface Places {
  html_attributions: [];
  next_page_token: string;
  results: Result[];
}