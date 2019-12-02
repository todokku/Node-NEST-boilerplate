import { ApiModelProperty } from '@nestjs/swagger';
import { IsMongoId, IsNumber, IsNotEmpty } from 'class-validator';

export class BaseUpdateClass {
  @ApiModelProperty({
    // example: 'string',
    description:
      'Mongo id of the document, Hex [0-9a-f], 24 letter alphanumeric',
  })
  @IsMongoId()
  // tslint:disable-next-line: variable-name
  public readonly _id?: string;

  @ApiModelProperty({
    // example: 0,
    description: 'Version of the document',
  })
  @IsNumber()
  // tslint:disable-next-line: variable-name
  public readonly __v?: number;

  @ApiModelProperty({
    // example: 'string',
    description: 'Name of the document',
  })
  @IsNotEmpty()
  readonly name: string;
}
