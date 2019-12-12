import { ILocationLatLng } from './../../../dist/restaurants/interfaces/latLng.interface.d';
import { Document } from 'mongoose';

export interface IRestaurant extends Document {
  // id: string;
  city: string;
  image: string;
  name: string;
  email: string;
  location: ILocationLatLng;
}
