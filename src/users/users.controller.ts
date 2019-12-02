import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Users')
@Controller('users')
export class UsersController {}
