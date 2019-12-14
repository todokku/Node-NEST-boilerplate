import { IsEmail, Matches, IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  // Password
  @ApiProperty({
    example: 'oldPass',
    description: 'Old authorized password of user',
  })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  readonly oldPassword: string;

  // Password
  @ApiProperty({
    example: 'newPass',
  })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  readonly newPassword: string;

  // Confirm password
  @ApiProperty({
    example: 'newPass',
  })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  readonly confirmNewPassword: string;
}
