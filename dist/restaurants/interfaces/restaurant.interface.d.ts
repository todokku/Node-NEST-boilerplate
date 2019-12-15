import { IMongoPoint } from './mongo-point.interface';
import { Document } from 'mongoose';
import { LocationDto } from '../dto/location.dto';
export interface IRestaurant extends Document {
    id?: string;
    readonly cityId: string;
    readonly image: string;
    readonly name: string;
    readonly email: string;
    readonly location: IMongoPoint | LocationDto;
}
