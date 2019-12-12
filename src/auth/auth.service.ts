import { errors } from '../shared/constants/errors';
import { compare } from 'bcryptjs';
import { IUser } from './../users/interfaces/user.interface';
import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
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
    if (user) {
      const isPassCorrect = await compare(userLogin.password, user.password);
      if (isPassCorrect) {
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
        throw errors.invalidEmailOrPassword;
      }
    } else {
      throw errors.invalidEmailOrPassword;
    }
  }

  async register(user: IUser) {
    const { password, ...createdUser } = await this.usersService.create(user);
    return createdUser;
  }
}
