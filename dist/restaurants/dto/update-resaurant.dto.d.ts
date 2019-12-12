import { LatLngDto } from './lat-lng.dto';
export declare class CreateRestaurantDto {
    readonly cityId: string;
    readonly image: string;
    readonly name: string;
    readonly email: string;
    readonly location: LatLngDto;
}
