import { CountriesService } from './countries.service';
import { CountrySchema } from './models/country.model';
import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { models } from 'mongoose';

// console.log({ countriesService: CountriesService });
// @Crud({ model: })
@Controller('countries')
export class CountriesController {}
