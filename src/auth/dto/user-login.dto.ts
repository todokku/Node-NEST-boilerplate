import { IsEmail, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UserLoginDto {
  // Email
  @ApiProperty({ example: 'admin@index-group.net' })
  @IsEmail()
  readonly email: string;

  // Password
  @ApiProperty({ example: 'P@$$$W0RD' })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  readonly password: string;
}
