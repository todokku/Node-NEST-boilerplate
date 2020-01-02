import { BaseDtoClass } from './../../../../shared/base/dto/base-dto.class';
import { LocationDto } from './location.dto';
export declare class RestaurantDto extends BaseDtoClass {
    readonly cityId: string;
    image: string;
    readonly email: string;
    readonly location: LocationDto;
}
