import { BaseUpdateClass } from './../../global/base/dto/base-update-class';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, Matches, IsEnum, IsString } from 'class-validator';

export class UpdateUserDto extends BaseUpdateClass {
  @ApiModelProperty({ example: 'user' })
  @IsString()
  name: string;

  @ApiModelProperty({ example: 'user@mail.com' })
  @IsEmail()
  email: string;

  @ApiModelProperty()
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;
  //   confirmPassword: string;

  @ApiModelProperty({ enum: ['Admin', 'User'] })
  @IsEnum({ user: 'User', admin: 'Admin' })
  roles: string[];
}
