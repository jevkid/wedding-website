export interface Place {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  image: string;
  desc?: string;
  address?: string;
  website?: string;
  mapsLink: string;
}