import { UserRoles } from './../enum/roles.enums';
import { BaseUpdateClass } from '../../shared/base/dto/base-update-class';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches, IsEnum, IsString } from 'class-validator';

export class UpdateUserDto extends BaseUpdateClass {
  // Name
  @ApiProperty({ example: 'user' })
  @IsString()
  name: string;

  // Email
  @ApiProperty({ example: 'user@mail.com' })
  @IsEmail()
  email: string;

  // Role
  @ApiProperty({ enum: ['Admin', 'User'] })
  @IsEnum({ user: 'User', admin: 'Admin' })
  role: UserRoles;
}
