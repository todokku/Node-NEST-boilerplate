import { UserLoginDto } from './dto/user-login.dto';
import { UsersService } from './../users/users.service';
import { ApiUseTags } from '@nestjs/swagger';
import { Controller, Post, Body, Logger } from '@nestjs/common';

@ApiUseTags('Authorization and Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  login(@Body() userLogin: UserLoginDto) {
    try {
      return this.usersService.validateOnUser(userLogin);
    } catch (error) {
      Logger.error(error);
    }
  }

  @Post('logout')
  logout() {
    try {
      // return this.usersService.validateOnUser(userLogin);
    } catch (error) {
      Logger.error(error);
    }
  }

  @Post('change-password')
  changePassword() {
    try {
      // return this.usersService.validateOnUser();
    } catch (error) {
      Logger.error(error);
    }
  }
}
