import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNumber, IsNotEmpty } from 'class-validator';

export class BaseUpdateClass {
  // _id : document object id
  @ApiProperty({
    example: '000000000000000000000000',
    description:
      'Mongo id of the document, Hex [0-9,a-f], 24 letter alphanumeric',
  })
  @IsMongoId()
  readonly _id?: string;

  // Version
  @ApiProperty({
    example: 0,
    description: 'Version of the document',
  })
  @IsNumber()
  readonly __v?: number;

  // Name
  @ApiProperty({
    example: 'document name',
    description: 'Name of the document',
  })
  @IsNotEmpty()
  readonly name: string;
}
