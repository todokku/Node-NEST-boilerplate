import { BaseUpdateClass } from './../../global/base/dto/base-update-class';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, Matches, IsEnum } from 'class-validator';

export class UpdateUserDto extends BaseUpdateClass {
  @ApiModelProperty()
  @IsEmail()
  email: string;

  @ApiModelProperty()
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;
  //   confirmPassword: string;

  @ApiModelProperty()
  @IsEnum({ user: 'User', admin: 'Admin' })
  role: string;
}
