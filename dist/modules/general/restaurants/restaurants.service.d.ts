import { IRestaurant } from './interfaces/restaurant.interface';
import { Model } from 'mongoose';
export declare class RestaurantsService {
    private readonly restaurantModel;
    constructor(restaurantModel: Model<IRestaurant>);
    create(restaurant: IRestaurant): any;
    search(restaurantName: any): any;
    groupByCity(): any;
    nearestRestaurant(location: any): any;
    update(id: string, restaurant: IRestaurant): any;
    getById(id: any): any;
    delete(id: any): any;
    getAll(): any;
}
