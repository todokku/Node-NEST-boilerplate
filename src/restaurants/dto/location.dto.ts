import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min, Max } from 'class-validator';

export class LocationDto {
  @ApiProperty({ example: 13 })
  @IsNumber()
  @Min(-180)
  @Max(180)
  readonly longitude: number;

  @ApiProperty({ example: 13 })
  @IsNumber()
  @Min(-90)
  @Max(90)
  readonly latitude: number;
}
