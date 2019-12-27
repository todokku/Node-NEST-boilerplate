import { IsEmail, Matches, IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterNewUserDto {
  // Name
  @ApiProperty({ example: 'user name' })
  @IsString()
  readonly name: string;

  // Email
  @ApiProperty({ example: 'user@mail.com' })
  @IsEmail()
  readonly email: string;

  // Password
  @ApiProperty({
    example: 'password123',
  })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  password: string;

  // Confirm password
  @ApiProperty({
    example: 'password123',
  })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  readonly confirmPassword: string;

  readonly roles = ['user'];
}
