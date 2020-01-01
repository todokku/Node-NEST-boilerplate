import { RestaurantsModule } from './general/restaurants/restaurants.module';
import { CitiesModule } from './general/cities/cities.module';
import { UsersModule } from './system/security/users/users.module';
import { AuthModule } from './system/security/auth/auth.module';
import { mongooseOptions } from './../shared/options/mongoose.options';
import { constants } from './../shared/constants/constants';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    /* Mongoose DB connection Init */
    MongooseModule.forRoot(
      process.env.DB_URI.replace('{{databaseName}}', process.env.DATABASE_NAME),
      mongooseOptions,
    ),

    /* Serve static files at Public [eg: index.html, uploads] */
    ServeStaticModule.forRoot({
      rootPath: join('.', 'public'),
    }),

    /* App Modules */
    AuthModule,
    UsersModule,
    CitiesModule,
    RestaurantsModule,
  ],
})
export class AppModule {}
