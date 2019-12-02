import { Document } from 'mongoose';

export interface City extends Document {
  id?: string;
  name: string;
}
