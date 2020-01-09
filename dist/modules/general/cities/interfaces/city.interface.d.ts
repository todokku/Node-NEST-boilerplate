import { Document } from 'mongoose';
export interface ICity extends Document {
    id?: string;
    name: string;
}
