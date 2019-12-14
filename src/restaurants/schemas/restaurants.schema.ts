import { GeoPointSchema } from './../../shared/schemas/geo-point.schema';
import { Schema, ObjectId } from 'mongoose';

export const RestaurantsSchema = new Schema({
  cityId: { type: ObjectId, required: true },
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  image: { type: String, required: true },
  location: GeoPointSchema,
});

RestaurantsSchema.index({ email: 1 }, { unique: true });
