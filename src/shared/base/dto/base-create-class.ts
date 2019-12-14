import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BaseCreateClass {
  // Name
  @ApiProperty({
    example: 'name',
    description: 'Name of the document',
  })
  @IsNotEmpty()
  readonly name: string;
}
