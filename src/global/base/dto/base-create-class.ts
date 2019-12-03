import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class BaseCreateClass {
  @ApiModelProperty({
    // example: 'string',
    description: 'Name of the document',
  })
  @IsNotEmpty()
  readonly name: string;
}
