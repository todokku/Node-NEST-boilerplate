import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class LatLngDto {
  @ApiModelProperty()
  @IsNumber()
  readonly lat: number;

  @ApiModelProperty()
  @IsNumber()
  readonly lng: number;
}
