import { UserRoles } from './../enum/roles.enums';
import { BaseCreateClass } from '../../shared/base/dto/base-create-class';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  Matches,
  IsString,
  IsArray,
  ArrayContains,
  ArrayNotEmpty,
} from 'class-validator';

export class CreateUserDto extends BaseCreateClass {
  // Name
  @ApiProperty({ example: 'user name' })
  @IsString()
  name: string;

  // Email
  @ApiProperty({ example: 'user@mail.com' })
  @IsEmail()
  email: string;

  // Password
  @ApiProperty({ example: 'password123' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;

  // Confirm password
  @ApiProperty({ example: 'password123' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  confirmPassword: string;

  // Role
  @ApiProperty({
    isArray: true,
    type: [String],
    example: ['user'],
  })
  @IsArray()
  @ArrayContains(['user'])
  @ArrayNotEmpty()
  roles: UserRoles[];
}
