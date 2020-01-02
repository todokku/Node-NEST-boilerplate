import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RestaurantsSearchDto {
  // Name
  @ApiProperty({ example: 'restaurant name' })
  @IsString()
  readonly name: string;
}
