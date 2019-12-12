import { ApiModelProperty } from '@nestjs/swagger';
import { IsMongoId, IsNumber, IsNotEmpty } from 'class-validator';

export class BaseUpdateClass {
  // Id
  @ApiModelProperty({
    example: '000000000000000000000000',
    description:
      'Mongo id of the document, Hex [0-9a-f], 24 letter alphanumeric',
  })
  @IsMongoId()
  readonly _id?: string;

  // Version
  @ApiModelProperty({
    example: 0,
    description: 'Version of the document',
  })
  @IsNumber()
  readonly __v?: number;

  // Name
  @ApiModelProperty({
    example: 'document name',
    description: 'Name of the document',
  })
  @IsNotEmpty()
  readonly name: string;
}
