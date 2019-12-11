import { IsEmail, Matches } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
export class UserLoginDto {
  // Email
  @ApiModelProperty({ example: 'admin@indexgroup.net' })
  @IsEmail()
  email: string;

  // Password
  @ApiModelProperty({ example: 'P@$$W0RD' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;
}
