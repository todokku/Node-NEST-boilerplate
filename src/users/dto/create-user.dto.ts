import { UserRoles } from './../enum/roles.enums';
import { BaseCreateClass } from '../../shared/base/dto/base-create-class';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, Matches, IsEnum, IsString } from 'class-validator';
import { isArray } from 'util';
export class CreateUserDto extends BaseCreateClass {
  // Name
  @ApiModelProperty({ example: 'user name' })
  @IsString()
  name: string;

  // Email
  @ApiModelProperty({ example: 'user@mail.com' })
  @IsEmail()
  email: string;

  // Password
  @ApiModelProperty({ example: 'password123' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;

  // Confirm password
  @ApiModelProperty({ example: 'password123' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  confirmPassword: string;

  // Role
  // @isArray()
  // @IsEnum({ user: 'User', admin: 'Admin' })
  @ApiModelProperty({ type: UserRoles, enum: UserRoles })
  role: UserRoles;
}
