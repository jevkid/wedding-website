import * as React from 'react';
import { MarkerIcons, OpeningHours, StarIcon } from './types';

/** Hides a DOM element and optionally focuses on focusEl. */
export const hideElement = (el: HTMLElement, focusEl: HTMLInputElement) => {
  el.style.display = 'none';
  if (focusEl) focusEl.focus();
}

/** Shows a DOM element that has been hidden and optionally focuses on focusEl. */
export const showElement = (el: HTMLElement, focusEl: HTMLInputElement) => {
  el.style.display = 'block';
  if (focusEl) focusEl.focus();
}

/** Determines if a DOM element contains content that cannot be scrolled into view. */
export const hasHiddenContent = (el: HTMLElement) => {
  const noscroll = window.getComputedStyle(el).overflowY.includes('hidden');
  return noscroll && el.scrollHeight > el.clientHeight;
}

/** Format a Place Type string by capitalizing and replacing underscores with spaces. */
export const formatPlaceType = (str: string) => {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized.replace(/_/g, ' ');
}

/** Initializes an array of zeros with the given size. */
export const initArray = (arraySize: number) => {
  const array = [];
  while (array.length < arraySize) {
    array.push(0);
  }
  return array;
}

/** Assigns star icons to an object given its rating (out of 5). */
export const addStarIcons = (obj: StarIcon) => {
  if (!obj.rating) return;
  const starsOutOfTen = Math.round(2 * obj.rating);
  const fullStars = Math.floor(starsOutOfTen / 2);
  const halfStars = fullStars !== starsOutOfTen / 2 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  // Express stars as arrays to make iterating in Handlebars easy.
  obj.fullStarIcons = initArray(fullStars);
  obj.halfStarIcons = initArray(halfStars);
  obj.emptyStarIcons = initArray(emptyStars);
}

/**
 * Constructs an array of opening hours by day from a PlaceOpeningHours object,
 * where adjacent days of week with the same hours are collapsed into one element.
 */
 export const parseDaysHours = (openingHours: OpeningHours) => {
  const daysHours = openingHours.weekday_text.map((e: string) => e.split(/\:\s+/))
    .map((e: string) => ({'days': e[0].substr(0, 3), 'hours': e[1]}));

  for (let i = 1; i < daysHours.length; i++) {
    if (daysHours[i - 1].hours === daysHours[i].hours) {
      if (daysHours[i - 1].days.indexOf('-') !== -1) {
        daysHours[i - 1].days =
            daysHours[i - 1].days.replace(/\w+$/, daysHours[i].days);
      } else {
        daysHours[i - 1].days += ' - ' + daysHours[i].days;
      }
      daysHours.splice(i--, 1);
    }
  }
  return daysHours;
}

/** Number of POIs to show on widget load. */
const ND_NUM_PLACES_INITIAL = 5;

/** Number of additional POIs to show when 'Show More' button is clicked. */
const ND_NUM_PLACES_SHOW_MORE = 5;

/** Maximum number of place photos to show on the details panel. */
const ND_NUM_PLACE_PHOTOS_MAX = 6;

/** Minimum zoom level at which the default map POI pins will be shown. */
const ND_DEFAULT_POI_MIN_ZOOM = 18;

/** Mapping of Place Types to Material Icons used to render custom map markers. */
const ND_MARKER_ICONS_BY_TYPE: MarkerIcons = {
  // Full list of icons can be found at https://fonts.google.com/icons
  '_default': 'circle',
  'restaurant': 'restaurant',
  'cafe': 'local_cafe',
  'bar': 'local_bar',
  'park': 'park',
  'stadium': 'sports_handball',
  'museum': 'museum',
  'supermarket': 'local_grocery_store',
  'clothing_store': 'local_mall',
  'shopping_mall': 'local_mall',
  'primary_school': 'school',
  'secondary_school': 'school',
  'tourist_attraction': 'local_see',
};

