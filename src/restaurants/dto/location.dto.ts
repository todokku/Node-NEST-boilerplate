import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class LocationDto {
  @ApiProperty({ example: 13 })
  @IsNumber()
  readonly longitude: number;

  @ApiProperty({ example: 13 })
  @IsNumber()
  readonly latitude: number;
}
