import { Schema, ObjectId } from 'mongoose';
// import { v7 } from 'mongoose-elasticsearch-xp';

// import * as mongoosastic from 'mongoosastic';

export const CitySchema = new Schema({
  name: {
    /* , es_indexed: true */
    type: String,
  },
  id: ObjectId,
});

// CitySchema.plugin(mongoosastic);

// CitySchema.plugin(mongoosastic, {
//   hosts: ['http://localhost:9200'],
//   host: '127.0.0.1',
//   port: 9200,
//   protocol: 'http',
// });

// CitySchema.plugin(v7);
