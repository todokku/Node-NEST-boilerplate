import { IsEmail, Matches, IsEnum, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  // Password
  @ApiModelProperty({
    example: 'oldPass',
    description: 'Old authorized password of user',
  })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  oldPassword: string;

  // Password
  @ApiModelProperty({
    example: 'newPass',
  })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  newPassword: string;

  // Confirm password
  @ApiModelProperty({
    example: 'newPass',
  })
  @Matches(/^.{6,}$/, { message: 'Password at least 6' })
  readonly confirmNewPassword: string;
}
