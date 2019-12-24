import { constants } from './shared/constants/constants';
import { Module } from '@nestjs/common';
import { CitiesModule } from './cities/cities.module';
import { UsersModule } from './users/users.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseOptions } from './shared/options/mongoose.options';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    /* Mongoose DB connection Init */
    MongooseModule.forRoot(
      process.env.DB_URI.replace('{{databaseName}}', constants.databaseName),
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
