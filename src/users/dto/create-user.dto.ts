import { UserRoles } from './../enum/roles.enums';
import { BaseCreateClass } from './../../global/base/dto/base-create-class';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, Matches, IsEnum, IsString } from 'class-validator';
import { isArray } from 'util';
export class CreateUserDto extends BaseCreateClass {
  @ApiModelProperty({ example: 'user name' })
  @IsString()
  name: string;

  @ApiModelProperty({ example: 'user@mail.com' })
  @IsEmail()
  email: string;

  @ApiModelProperty({ example: 'password123' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;

  @ApiModelProperty({ example: 'password123' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  confirmPassword: string;

  // @isArray()
  // @IsEnum({ user: 'User', admin: 'Admin' })
  @ApiModelProperty({ type: [String], enum: UserRoles, isArray: true })
  roles: UserRoles[];
}
