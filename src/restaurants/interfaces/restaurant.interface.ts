import { ILocationLatLng } from './location-lat-lng.interface';
import { Document } from 'mongoose';

export interface IRestaurant extends Document {
  // id: string;
  readonly city: string;
  readonly image: string;
  readonly name: string;
  readonly email: string;
  readonly location: ILocationLatLng;
}
