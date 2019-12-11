import * as bcryptjs from 'bcryptjs';
import { User } from './../users/interfaces/user.interface';
import { AuthController } from './auth.controller';
import { UsersService } from './../users/users.service';
import {
  Injectable,
  Logger,
  ForbiddenException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.getByEmail(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(userLogin) {
    const user = await this.usersService.getByEmail(userLogin.email);
    bcrypt.
    if (user && userLogin.password === user.password) {
      const { password, ...result } = user;
      return {
        bearer_token:
          'Bearer ' +
          this.jwtService.sign({
            _id: user._id,
            email: user.email,
            role: user.role,
          }),
      };
    } else {
      throw new UnauthorizedException('Invalid email or password');
    }
  }

  async register(user: User) {
    const { password, ...createdUser } = await this.usersService.create(user);
    return createdUser;
  }
}
