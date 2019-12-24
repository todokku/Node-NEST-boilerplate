import { UserRoles } from './../enum/roles.enums';
import { BaseUpdateClass } from '../../shared/base/dto/base-update-class';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  IsArray,
  ArrayContains,
  ArrayNotEmpty,
} from 'class-validator';

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
    type: [String],
    example: ['user', 'admin'],
  })
  @IsArray()
  @ArrayContains(['user', 'admin'])
  @ArrayNotEmpty()
  roles: UserRoles[];
}
