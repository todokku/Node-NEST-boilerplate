import { LatLngDto } from './lat-lng.dto';
import {
  IsMongoId,
  IsEmail,
  IsString,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateRestaurantDto {
  // City Id
  @ApiModelProperty({ example: '000000000000000000000000' })
  @IsMongoId()
  readonly cityId: string;

  // Image
  // TODO: from images
  @ApiModelProperty()
  readonly image: string;

  // Name
  @ApiModelProperty()
  @IsString()
  readonly name: string;

  // Email
  @ApiModelProperty({ example: 'user@mail.com' })
  @IsEmail()
  readonly email: string;

  // Location
  @ApiModelProperty()
  @ValidateNested()
  @Type(() => LatLngDto)
  readonly location: LatLngDto;
}
