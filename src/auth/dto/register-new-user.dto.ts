import { IsEmail, Matches, IsEnum } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterNewUserDto {
  @ApiModelProperty({ example: 'mail@gmail.com' })
  @IsEmail()
  email: string;

  @ApiModelProperty({ example: 'password123' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;

  // @IsEnum()
  role = 'User';
}
