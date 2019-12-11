import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class BaseCreateClass {
  // Name
  @ApiModelProperty({
    example: 'name',
    description: 'Name of the document',
  })
  @IsNotEmpty()
  readonly name: string;
}
