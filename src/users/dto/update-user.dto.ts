import { UserRoles } from './../enum/roles.enums';
import { BaseUpdateClass } from '../../shared/base/dto/base-update-class';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Matches, IsEnum, IsString, IsArray } from 'class-validator';

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
  @ApiProperty({ enum: ['admin', 'user'] })
  @IsEnum({ user: 'user', admin: 'admin' })
  @IsArray()
  roles: [UserRoles];
}
