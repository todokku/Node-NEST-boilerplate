import { IMongoPoint } from './../interfaces/mongo-point.interface';
import { LocationDto } from './location.dto';
import {
  IsMongoId,
  IsEmail,
  IsString,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateRestaurantDto {
  // City Id
  @ApiProperty({ example: '000000000000000000000000' })
  @IsMongoId()
  readonly cityId: string;

  // Image
  @ApiProperty({ type: 'string', format: 'binary' })
  /* readonly  */
  image: string;

  // Name
  @ApiProperty({ example: 'restaurant name' })
  @IsString()
  readonly name: string;

  // Email
  @ApiProperty({ example: 'restaurant@mail.com' })
  @IsEmail()
  readonly email: string;

  // Location
  @ApiProperty()
  // @ValidateNested(/* { context: LocationDto } */)
  // @Type(() => {
  //   console.log({ LocationDto });
  //   return LocationDto;
  // })
  readonly location: LocationDto;
}
