import * as mongoose from 'mongoose';
import * as nestMongoose from '@nestjs/mongoose';
import { Schema, ObjectId, Connection } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String },
  email: {
    type: String,
    unique: true,
    sparse: true,
    dropDups: true,
    index: { unique: true },
  },
  password: { type: String },
  role: { type: String, enum: ['Admin', 'User'] },
});
UserSchema.index({ email: 1 }, { unique: true });
