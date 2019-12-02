import { readFileSync } from 'fs';
import { join } from 'path';
import { parse, config } from 'dotenv';
config(parse(readFileSync(join(__dirname, '..', '.env'))));

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { UsersModule } from './users/users.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseOptions } from './global/options/mongoose';
// import { ConfigurationsModule } from './global/configurations/configurations.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Mongoose DB connection Init
    MongooseModule.forRoot(
      process.env.DB_URI,
      mongooseOptions,
    ),
    // App Modules
    CitiesModule,
    UsersModule,
    RestaurantsModule,
    AuthModule,
    // ConfigurationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
