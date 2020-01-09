import { BaseDtoClass } from './../../../../../shared/base/dto/base-dto.class';
import { UserRoles } from './../enum/roles.enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsArray, ArrayUnique } from 'class-validator';
import { ValidArrayValues } from 'src/shared/validators/extend-class-validator';

export class UpdateUserDto extends BaseDtoClass {
  // Name
  @ApiProperty({ example: 'user' })
  @IsString()
  name: string;

  // Email
  @ApiProperty({ example: 'user@mail.com' })
  @IsEmail()
  email: string;

  // Role
  @ApiProperty({
    isArray: true,
    example: ['user', 'admin'],
  })
  @IsArray()
  @ArrayUnique()
  @ValidArrayValues(['admin', 'user'])
  roles: UserRoles[];
}
