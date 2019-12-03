import { Schema, ObjectId } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['Admin', 'User'] },
});
