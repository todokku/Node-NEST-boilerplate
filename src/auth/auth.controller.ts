import { RegisterNewUserDto } from './dto/register-new-user.dto';
import { User } from './../global/decorators/user.decorator';

import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { UsersService } from './../users/users.service';
import { ApiUseTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Post, Body, Logger, UseGuards, Req } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';

@ApiUseTags('Authorization and Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  // @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({
    title: 'Login user',
    description: 'End-Point for login user',
  })
  login(@Body() userLogin: UserLoginDto) {
    return this.authService.login(userLogin);
  }

  @Post('logout')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    title: 'Logout user',
    description: 'End-Point for logout user',
  })
  logout(@User() user) {
    try {
      return {};
      // return this.usersService.validateOnUser(userLogin);
    } catch (error) {
      Logger.error(error);
    }
  }

  @Post('register')
  @ApiOperation({
    title: 'Register new user',
    description: 'End-Point for register new user',
  })
  register(@Body() registerNewUserDto: RegisterNewUserDto) {
    try {
      return this.authService.register(registerNewUserDto);
    } catch (error) {
      Logger.error(error);
    }
  }

  @Post('change-password')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    title: 'Change user password',
    description: 'End-Point for change user password',
  })
  changePassword() {
    try {
      // return this.usersService.validateOnUser();
    } catch (error) {
      Logger.error(error);
    }
  }
}
