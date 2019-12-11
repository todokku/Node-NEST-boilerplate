import { IsEmail, Matches, IsEnum, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterNewUserDto {
  // Name
  @ApiModelProperty({ example: 'user name' })
  @IsString()
  name: string;

  // Email
  @ApiModelProperty({ example: 'user@mail.com' })
  @IsEmail()
  email: string;

  // Password
  @ApiModelProperty({
    example: 'password123',
  })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;

  // Confirm password
  @ApiModelProperty({
    example: 'password123',
  })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  confirmPassword: string;

  role = 'User';
}
