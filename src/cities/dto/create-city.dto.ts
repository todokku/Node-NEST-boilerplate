import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCityDto {
  @ApiProperty({ example: 'Alexandria', description: 'The name of the City' })
  @IsNotEmpty()
  readonly name: string;
}
