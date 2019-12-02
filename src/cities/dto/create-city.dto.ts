import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCityDto {
  @ApiModelProperty({ example: 'Alexandria', description: 'The name of the City' })
  @IsNotEmpty()
  readonly name: string;
}
