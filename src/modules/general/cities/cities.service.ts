import { ElasticSearchModule } from './../../system/elastic-search/elastic-search.module';
import { ElasticSearchService } from './../../system/elastic-search/elastic-search.service';
import { ICity } from './interfaces/city.interface';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class CitiesService {
  constructor(
    @InjectModel('City')
    private readonly cityModel: Model<ICity>,
    // elasticSearchService: ElasticSearchService,
  ) {
    // console.log({ cityModel });

    // console.log(elasticSearchService);

    // cityModel.create(
    //   { name: 'alexandria' },
    //   (err, data) => {},
    //   // console.log({ err, data }),
    // );

    /* cityModel.createMapping((err, mapping) => {
      if (err) {
        console.log({ err }, 'mapping');
      } else {
        console.log({ mapping });
      }
    }); */

    // cityModel.synchronize();

    // const stream = cityModel.synchronize();
    // let count = 0;
    // stream.on('data', (err, data) => {
    //   // console.log({ err, data });
    //   count++;
    // });
    // stream.on('close', () => {
    //   console.log({ count: 'Indexes ' + count + ' documents' });
    // });
    // stream.on('error', err => {
    //   console.log({ errorAtSynchronizeMongoose: err });
    // });

    // cityModel.search(
    //   {
    //     query_string: {
    //       query: `*${'cai'}*`,
    //     },
    //   },
    //   (err, results) => {
    //     if (results && results.hits && results.hits.hits) {
    //       /* console.log({
    //         results: */ results.hits.hits.map(doc =>
    //         doc
    //           ? {
    //               _id: doc._id,
    //               ...doc._source,
    //             }
    //           : {},
    //       ); /* ,
    //       }); */
    //     }
    //   },
    // );

    // cityModel.find({}, (err, data) => {
    //   console.log({ err, data });
    // });

    // this.cityModel.createMapping(function(err, mapping) {
    //   if (err) {
    //     console.log('error creating mapping (you can safely ignore this)');
    //     console.log(err);
    //   } else {
    //     console.log('mapping created!');
    //     console.log(mapping);
    //   }
    // });
    // this.cityModel.esSearch('name:alexandria').then(results => {
    //   console.log({ results });
    // });
  }

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
    return this.cityModel.delete({ _id: id });
  }

  getAll() {
    return this.cityModel.find();
  }
}
