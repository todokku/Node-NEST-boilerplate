import { City } from './interfaces/city.interface';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class CitiesService {
  //   private id = 0;
  //   private readonly cities: City[] = [];

  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  create(city: City) {
    try {
      return this.cityModel.create(city);
    } catch (error) {
      return Logger.error(error);
    }
  }

  update(id: string, city: City) {
    try {
      return this.cityModel.findOneAndUpdate(
        { _id: id },
        { $set: city },
        { new: true },
      );
    } catch (error) {
      return Logger.error(error);
    }
  }

  getById(id) {
    try {
      return this.cityModel.findOne({ _id: id });
    } catch (error) {
      return Logger.error(error);
    }
  }

  delete(id) {
    try {
      return this.cityModel.findOneAndDelete({ _id: id });
    } catch (error) {
      return Logger.error(error);
    }
  }

  getAll() {
    try {
      return this.cityModel.find();
    } catch (error) {
      return Logger.error(error);
    }
  }
}
