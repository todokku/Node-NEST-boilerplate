import { UserRoles } from './../enum/roles.enums';
import { BaseUpdateClass } from '../../shared/base/dto/base-update-class';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, Matches, IsEnum, IsString } from 'class-validator';

export class UpdateUserDto extends BaseUpdateClass {
  // Name
  @ApiModelProperty({ example: 'user' })
  @IsString()
  name: string;

  // Email
  @ApiModelProperty({ example: 'user@mail.com' })
  @IsEmail()
  email: string;

  // Role
  @ApiModelProperty({ enum: ['Admin', 'User'] })
  @IsEnum({ user: 'User', admin: 'Admin' })
  role: UserRoles;
}
