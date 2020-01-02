import { BaseDtoClass } from '../../../../shared/base/dto/base-dto.class';
import { LocationDto } from './location.dto';
import {
  IsMongoId,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RestaurantDto extends BaseDtoClass {
  // City Id
  @ApiProperty({ example: '000000000000000000000000' })
  @IsMongoId()
  readonly cityId: string;

  // Image
  @ApiProperty({ type: 'string', format: 'binary' })
  /* readonly  */
  image: string;

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
