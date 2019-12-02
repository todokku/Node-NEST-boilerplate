import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
