import { AuthController } from './auth.controller';
import { UsersService } from './../users/users.service';
import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService, // private readonly authController: AuthController,
  ) {}

  async login(userLogin) {
    const user = await this.usersService.getByEmail(userLogin.email);
    if (user && userLogin.password === user.password) {
      const { password, ...result } = user;
      return {
        access_token: this.jwtService.sign({
          _id: user._id,
          email: user.email,
        }),
      };
      return result;
    } else {
      return 'Invalid email or password';
    }
    Logger.log(userLogin);
  }
}
