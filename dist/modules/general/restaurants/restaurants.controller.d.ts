import { RestaurantsSearchDto } from './dto/search-restaurant.dto';
import { RestaurantsService } from './restaurants.service';
import { LocationDto } from './dto/location.dto';
export declare class RestaurantsController {
    private readonly restaurantsService;
    constructor(restaurantsService: RestaurantsService);
    create(image: any, body: any): any;
    findAll(): any;
    nearestRestaurant(body: LocationDto): any;
    search(body: RestaurantsSearchDto): any;
    groupByCity(): any;
    getById(id: string): any;
    delete(id: string): any;
    update(id: string, image: any, body: any): any;
}
