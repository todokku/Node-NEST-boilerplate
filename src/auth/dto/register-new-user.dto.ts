import { IsEmail, Matches, IsEnum, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterNewUserDto {
  @ApiModelProperty({ example: 'user name' })
  @IsString()
  name: string;

  @ApiModelProperty({ example: 'user@mail.com' })
  @IsEmail()
  email: string;

  @ApiModelProperty({
    example: 'password123',
  })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;

  @ApiModelProperty({
    example: 'password123',
  })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  confirmPassword: string;

  roles = ['User'];
}
