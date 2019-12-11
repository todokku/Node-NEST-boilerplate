import { IsMongoId } from 'class-validator';
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
  name: string;

  // Email
  // TODO: validate if is email
  @ApiModelProperty()
  email: string;

  // Location
  // TODO: Geo-location
  @ApiModelProperty()
  location: string;
}
