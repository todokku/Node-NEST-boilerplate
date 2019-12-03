import { UserLoginDto } from './dto/user-login.dto';
import { UsersService } from './../users/users.service';
import { ApiUseTags } from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';

@ApiUseTags('Authorization and Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}
  @Post('login')
  login(@Body() userLogin: UserLoginDto) {
    return this.usersService.validateOnUser(userLogin);
  }

  @Post('logout')
  logout() {}

  @Post('change-password')
  changePassword() {}
}
