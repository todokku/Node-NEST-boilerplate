import { User } from './../../../../shared/decorators/user.decorator';
import { bcryptOptions } from './../../../../shared/options/bcrypt.options';
import { errors } from '../../../../shared/exceptions/errors';
import { DeleteFieldsInterceptor } from './../../../../shared/interceptors/delete-fields.interceptor';
import { RegisterNewUserDto } from './dto/register-new-user.dto';
import { IUserJWT } from './interfaces/jwt-user';
import { ChangePasswordDto } from './dto/change-password-dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { hash } from 'bcryptjs';

@ApiTags('Auth')
@Controller('auth')
@UseInterceptors(new DeleteFieldsInterceptor('password'))
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({
    summary: 'Login user',
    description: 'End-Point for login user',
  })
  login(@Body() userLogin: UserLoginDto) {
    return this.authService.login(userLogin);
  }

  @Post('logout')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Logout user',
    description: 'End-Point for logout user',
  })
  logout(@Req() req) {
    req.cookies.jwt = { maxAge: Date.now() };
    return {};
  }

  @Post('register')
  @ApiOperation({
    summary: 'Register new user',
    description: 'End-Point for register new user',
  })
  async register(@Body() registerNewUserDto: RegisterNewUserDto) {
    if (registerNewUserDto.password !== registerNewUserDto.confirmPassword) {
      throw errors.invalidPasswordConfirmation;
    } else {
      registerNewUserDto.password = await hash(
        registerNewUserDto.password,
        bcryptOptions.rounds,
      );
      return this.authService.register(registerNewUserDto);
    }
  }

  @Post('profile')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Register new user',
    description: 'End-Point for register new user',
  })
  profile(@User() user: IUserJWT) {
    return this.authService.profile(user._id);
  }

  @Post('change-password')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Change user password',
    description: 'End-Point for change user password',
  })
  changePassword(
    @User() user: IUserJWT,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.authService.changePassword(user, changePasswordDto);
  }
}
