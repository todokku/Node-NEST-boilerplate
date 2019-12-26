import { ObjectId } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class BaseDtoClass {
  // Id
  //   @ApiProperty({
  //     example: '000000000000000000000000',
  //     description:
  //       'Mongo id of the document, Hex [0-9,a-f], 24 letter alphanumeric',
  //   })
  //   @IsMongoId()
  //   @IsOptional()
  readonly _id?: ObjectId;

  // Version
  //   @ApiProperty({
  //     example: 0,
  //     description: 'Version of the document',
  //   })
  //   @IsNumber()
  readonly __v?: number;

  // Name
  @ApiProperty({
    example: 'document name',
    description: 'Name of the document',
  })
  @IsNotEmpty()
  readonly name: string;
}
