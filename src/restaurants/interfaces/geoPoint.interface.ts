import { Document } from 'mongoose';

export interface Restaurant extends Document {
  lat: number;
  lng: number;
}
