import { Schema, ObjectId } from 'mongoose';

export const CitySchema = new Schema({
  name: String,
  id: ObjectId,
});
