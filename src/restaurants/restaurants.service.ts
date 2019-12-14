import { IRestaurant } from './interfaces/restaurant.interface';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class RestaurantsService {
  constructor(
    @InjectModel('Restaurant')
    private readonly restaurantModel: Model<IRestaurant>,
  ) {}

  create(restaurant: IRestaurant) {
    return this.restaurantModel.create(restaurant);
  }

  update(id: string, restaurant: IRestaurant) {
    return this.restaurantModel.findOneAndUpdate(
      { _id: id },
      { $set: restaurant },
      { new: true },
    );
  }

  getById(id) {
    return this.restaurantModel.findOne({ _id: id });
  }

  delete(id) {
    return this.restaurantModel.findOneAndDelete({ _id: id });
  }

  getAll() {
    return this.restaurantModel.find();
  }
}
