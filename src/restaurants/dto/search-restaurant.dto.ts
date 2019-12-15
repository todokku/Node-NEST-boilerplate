import { IMongoPoint } from '../interfaces/mongo-point.interface';
import { LocationDto } from './location.dto';
import { IsMongoId, IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RestaurantsSearchDto {
  // Name
  @ApiProperty({ example: 'restaurant name' })
  @IsString()
  readonly name: string;
}
