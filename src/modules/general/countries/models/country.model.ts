import { Schema, ObjectId } from 'mongoose';

export const CountrySchema = new Schema({
  name: {
    type: String,
  },
  id: ObjectId,
});
