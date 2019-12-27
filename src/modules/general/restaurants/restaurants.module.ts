import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantsSchema } from './schemas/restaurants.schema';

@Module({
  imports: [
    // Mongoose: register restaurant model
    MongooseModule.forFeature([
      { name: 'Restaurant', schema: RestaurantsSchema },
    ]),
  ],
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
