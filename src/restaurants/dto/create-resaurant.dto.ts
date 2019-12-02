import { ApiModelProperty } from '@nestjs/swagger';

export class CreateRestaurantDto {


  // TODO: Swagger
  // TODO: ObjectId
  @ApiModelProperty()
  id: string;

  // TODO: object id
  @ApiModelProperty()
  city: string;

  // TODO: from images
  @ApiModelProperty()
  image: string;

  @ApiModelProperty()
  name: string;

  // TODO: validate if is email
  @ApiModelProperty()
  email: string;

  // TODO: Geo-location
  @ApiModelProperty()
  location: string;
}
