import { CountrySchema } from './models/country.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesController } from './countries.controller';

@Module({
  imports: [
    // Mongoose: register city model
    MongooseModule.forFeature([
      {
        name: 'Country',
        schema: CountrySchema,
      },
    ]),
  ],
  providers: [CountriesService],
  controllers: [CountriesController],
})
export class CountriesModule {}
