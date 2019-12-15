import { Schema } from 'mongoose';

export const GeoPointSchema = new Schema({
  _id: false,
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});
