import { IsEmail, Matches } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class UserLoginDto {
  @ApiModelProperty({ example: 'user@mail.com' })
  @IsEmail()
  email: string;

  @ApiModelProperty({ example: 'password123' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;
}
