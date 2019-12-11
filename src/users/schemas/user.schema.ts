import { UserRoles } from './../enum/roles.enums';
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String },
  email: {
    type: String,
  },
  password: { type: String },
  role: { type: UserRoles /* , enum: ['Admin', 'User'] */ },
});

UserSchema.index({ email: 1 }, { unique: true });
