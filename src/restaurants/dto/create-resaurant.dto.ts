import { IsMongoId, IsEmail, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateRestaurantDto {
  // City Id
  @ApiModelProperty()
  @IsMongoId()
  cityId: string;

  // Image
  // TODO: from images
  @ApiModelProperty()
  image: string;

  // Name
  @ApiModelProperty()
  @IsString()
  name: string;

  // Email
  @ApiModelProperty()
  @IsEmail()
  email: string;

  // Location
  // TODO: Geo-location
  @ApiModelProperty()
  location: string;
}
