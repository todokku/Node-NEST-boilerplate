import { City } from './interfaces/city.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class CitiesService {
  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  create(city: City) {
    return this.cityModel.create(city);
  }

  update(id: string, city: City) {
    try {
      return this.cityModel.findOneAndUpdate(
        { _id: id },
        { $set: city },
        { new: true },
      );
    } catch (e) {
      return e;
    }
  }

  getById(id) {
    try {
      return this.cityModel.findOne({ _id: id });
    } catch (e) {
      return e;
    }
  }

  delete(id) {
    try {
      return this.cityModel.findOneAndDelete({ _id: id });
    } catch (e) {
      return e;
    }
  }

  getAll() {
    try {
      return this.cityModel.find();
    } catch (e) {
      return e;
    }
  }
}
