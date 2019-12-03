import { BaseCreateClass } from './../../global/base/dto/base-create-class';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, Matches, IsEnum } from 'class-validator';
export class CreateUserDto extends BaseCreateClass {
  @ApiModelProperty({ example: 'mail@gmail.com' })
  @IsEmail()
  email: string;

  @ApiModelProperty({ example: 'password123' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;

  @ApiModelProperty({ enum: ['User', 'Admin'] })
  @IsEnum({ user: 'User', admin: 'Admin' })
  role: string;
}
