import { UserRoles } from './../enum/roles.enums';
import { Schema } from 'mongoose';
// import * as mongoosastic from 'mongoosastic';

export const UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  roles: [{ type: String, enum: ['admin', 'user'] }],
});

UserSchema.index({ email: 1 }, { unique: true });

// UserSchema.plugin(mongoosastic, elasticSearchOptions);
