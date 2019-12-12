import { bcryptOptions } from '../shared/options/bcrypt.options';
import { errors } from '../shared/constants/errors';
import { RegisterNewUserDto } from './dto/register-new-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { ApiUseTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { hash } from 'bcryptjs';

@ApiUseTags('Authorization and Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
  logout(@Req() req) {
    return (req.cookies.jwt = { maxAge: Date.now() });
  }

  @Post('register')
  @ApiOperation({
    title: 'Register new user',
    description: 'End-Point for register new user',
  })
  async register(@Body() registerNewUserDto: RegisterNewUserDto) {
    if (registerNewUserDto.password !== registerNewUserDto.confirmPassword) {
      throw errors.passwordNotEqualConfirmPassword;
    } else {
      registerNewUserDto.password = await hash(
        registerNewUserDto.password,
        bcryptOptions.rounds,
      );
      return this.authService.register(registerNewUserDto);
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
    // return this.usersService.validateOnUser();
  }
}
