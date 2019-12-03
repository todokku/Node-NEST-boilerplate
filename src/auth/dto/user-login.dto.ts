import { IsEmail, Matches } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class UserLoginDto {
  @ApiModelProperty({ example: 'mail@gmail.com' })
  @IsEmail()
  email: string;

  @ApiModelProperty({ example: 'password123' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;
}
