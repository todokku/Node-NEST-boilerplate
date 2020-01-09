import { ElasticSearchService } from './../../../modules/system/elastic-search/elastic-search.service';

import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class CitiesService {
  constructor(/* private */ readonly model /* : Model<T> */) {
    console.log(this.model);
  }

  create(city) {
    return this.model.create(city);
  }

  update(id: string, city) {
    return this.model.findOneAndUpdate(
      { _id: id },
      { $set: city },
      { new: true },
    );
  }

  getById(id) {
    return this.model.findOne({ _id: id });
  }

  delete(id) {
    return this.model.delete({ _id: id });
  }

  getAll() {
    return this.model.find();
  }
}
