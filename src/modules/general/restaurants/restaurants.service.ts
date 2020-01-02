import { IRestaurant } from './interfaces/restaurant.interface';
import { Injectable } from '@nestjs/common';
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

  search(restaurantName) {
    return this.restaurantModel.find({
      name: new RegExp(restaurantName, 'i'),
    });
  }

  groupByCity() {
    return this.restaurantModel.aggregate([
      {
        $lookup: {
          from: 'cities',
          localField: 'cityId',
          foreignField: '_id',
          as: 'city',
        },
      },
      {
        $unwind: {
          path: '$city',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: '$cityId',
          city: { $first: '$city' },
          restaurantsData: {
            $push: {
              restaurantId: '$_id',
              name: '$name',
              // image: '$image',
              // email: '$email',
              location: {
                longitude: { $arrayElemAt: ['$location.coordinates', 0] },
                latitude: { $arrayElemAt: ['$location.coordinates', 1] },
              },
            },
          },
          restaurantsCount: { $sum: 1 },
        },
      },
      {
        $addFields: {
          'restaurants.count': '$restaurantsCount',
          'restaurants.data': '$restaurantsData',
        },
      },
      {
        $project: {
          _id: 0,
          'city.__v': 0,
          restaurantsData: 0,
          restaurantsCount: 0,
        },
      },
    ]);
  }

  nearestRestaurant(location /* : IMongoPoint */) {
    return this.restaurantModel.find({
      location: { $nearSphere: { $geometry: location } },
    });
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
