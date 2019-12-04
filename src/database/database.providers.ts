import { mongooseOptions } from './../global/options/mongoose';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.DB_URI, mongooseOptions),
  },
];
