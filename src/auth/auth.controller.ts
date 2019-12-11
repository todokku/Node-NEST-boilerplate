import { RegisterNewUserDto } from './dto/register-new-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { ApiUseTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  ForbiddenException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

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
  register(@Body() registerNewUserDto: RegisterNewUserDto) {
    if (registerNewUserDto.password != registerNewUserDto.confirmPassword)
      throw new ForbiddenException(
        'Password and confirm password are not equal',
      );
    else {
      bcrypt.hash('bacon', 10, (err, hashedPassword) => {
        if (err) throw new InternalServerErrorException('Cannot hash password');
        else {
          registerNewUserDto.password = hashedPassword;
          return this.authService.register(registerNewUserDto);
        }
      });
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
