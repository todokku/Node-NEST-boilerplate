// import { CsrfMiddleware } from './shared/middlewares/csrf.middleware';
import { readFileSync } from 'fs';
import { join } from 'path';
import { parse, config } from 'dotenv';
config(parse(readFileSync(join(__dirname, '..', '.env'))));

import { Module, MiddlewareConsumer } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { UsersModule } from './users/users.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongooseOptions } from './shared/options/mongoose.options';
// import { ConfigurationsModule } from './global/configurations/configurations.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    /* Mongoose DB connection Init */
    MongooseModule.forRoot(process.env.DB_URI, mongooseOptions),

    /* App Modules */
    AuthModule,
    UsersModule,
    CitiesModule,
    RestaurantsModule,

    /* Configurations */
    // ConfigurationsModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
