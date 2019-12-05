import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { UsersService } from './../users/users.service';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { Controller, Post, Body, Logger, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

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
    // async validateOnUser(userLogin: UserLoginDto) {
    // try {
    // const user = await this.userModel
    //   .findOne({ email: userLogin.email })
    //   .lean();

    // } catch (error) {
    //   Logger.error(error);
    // }
    // }
    // return;
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
