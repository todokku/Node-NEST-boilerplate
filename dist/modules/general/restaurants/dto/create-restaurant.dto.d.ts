import { LocationDto } from './location.dto';
export declare class CreateRestaurantDto {
    readonly cityId: string;
    image: string;
    readonly name: string;
    readonly email: string;
    readonly location: LocationDto;
}
