import { ICity } from './interfaces/city.interface';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class CitiesService {
  constructor(@InjectModel('City') private readonly cityModel: Model<ICity>) {}

  create(city: ICity) {
    return this.cityModel.create(city);
  }

  update(id: string, city: ICity) {
    return this.cityModel.findOneAndUpdate(
      { _id: id },
      { $set: city },
      { new: true },
    );
  }

  getById(id) {
    return this.cityModel.findOne({ _id: id });
  }

  delete(id) {
    return this.cityModel.findOneAndDelete({ _id: id });
  }

  getAll() {
    return this.cityModel.find();
  }
}
