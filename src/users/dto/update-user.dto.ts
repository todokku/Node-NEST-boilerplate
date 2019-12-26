import { UserRoles } from './../enum/roles.enums';
import { BaseUpdateClass } from '../../shared/base/dto/base-update-class';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsArray,
  ArrayContains,
  ArrayNotEmpty,
  IsIn,
  ArrayUnique,
  Allow,
  Matches,
} from 'class-validator';
import { ValidArrayValues } from 'src/shared/validators/extend-class-validator';

export class UpdateUserDto extends BaseUpdateClass {
  // Name
  @ApiProperty({ example: 'user' })
  @IsString()
  name: string;

  // Email
  @ApiProperty({ example: 'user@mail.com' })
  @IsEmail()
  email: string;

  // Role
  @ApiProperty({
    isArray: true,
    example: ['user', 'admin'],
  })
  @IsArray()
  @ArrayUnique()
  @ValidArrayValues(['admin', 'user'])
  roles: UserRoles[];
}
