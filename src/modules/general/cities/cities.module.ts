import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitySchema } from './schemas/city.schema';

@Module({
  imports: [
    // Mongoose: register city model
    MongooseModule.forFeature([
      {
        name: 'City',
        schema: CitySchema,
      },
    ]),
  ],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
