import { LatLngDto } from './lat-lng.dto';
import { IsMongoId } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateRestaurantDto {
  // City Id
  @ApiModelProperty()
  @IsMongoId()
  readonly cityId: string;

  // Image
  // TODO: from images
  @ApiModelProperty()
  readonly image: string;

  // Name
  @ApiModelProperty()
  readonly name: string;

  // Email
  // TODO: validate if is email
  @ApiModelProperty()
  readonly email: string;

  // Location
  // TODO: Geo-location
  @ApiModelProperty()
  readonly location: LatLngDto;
}
