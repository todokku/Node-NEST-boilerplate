import { City } from './interfaces/city.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class CitiesService {
  //   private id = 0;
  //   private readonly cities: City[] = [];

  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  create(city: City) {
    return this.cityModel.create(city);
    // city.id = String(++this.id);
    // this.cities.push(city);
    // return this.cities[this.cities.length - 1];
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
    // const indexOfCity = this.cities.findIndex(cityObj => cityObj.id === id);
    // if (indexOfCity + 1) {
    //   city.id = id;
    //   return (this.cities[indexOfCity] = city);
    // } else {
    //   return 'Cannot found this city';
    // }
  }

  getById(id) {
    try {
      return this.cityModel.findOne({ _id: id });
    } catch (e) {
      return e;
    }
    // const indexOfCity = this.cities.findIndex(cityObj => cityObj.id === id);
    // if (indexOfCity + 1) {
    //   return this.cities[indexOfCity];
    // } else {
    //   return 'Cannot found this city';
    // }
  }

  delete(id) {
    try {
      return this.cityModel.findOneAndDelete({ _id: id });
    } catch (e) {
      return e;
    }
    // const indexOfCity = this.cities.findIndex(cityObj => cityObj.id === id);
    // if (indexOfCity + 1) {
    //   return this.cities.splice(indexOfCity, 1);
    // } else {
    //   return 'Cannot found this city';
    // }
  }

  getAll() {
    try {
      return this.cityModel.find();
    } catch (e) {
      return e;
    }
    // return this.cities;
  }
}
