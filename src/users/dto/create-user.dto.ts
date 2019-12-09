import { IUserRoles } from './../enum/roles.enums';
import { BaseCreateClass } from './../../global/base/dto/base-create-class';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, Matches, IsEnum, IsString } from 'class-validator';
export class CreateUserDto extends BaseCreateClass {
  @ApiModelProperty({})
  @IsString()
  name: string;

  @ApiModelProperty({ example: 'mail@gmail.com' })
  @IsEmail()
  email: string;

  @ApiModelProperty({ example: 'password123' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;

  @ApiModelProperty({ enum: ['User', 'Admin'] })
  @IsEnum({ user: 'User', admin: 'Admin' })
  role: IUserRoles;
}
