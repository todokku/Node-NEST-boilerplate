import { ChangePasswordDto } from './dto/change-password-dto';
import { ObjectId } from 'mongoose';
import { errors } from '../shared/constants/errors';
import { IUser } from './../users/interfaces/user.interface';
import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';

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

  profile(id: ObjectId) {
    return this.usersService.getById(id);
  }

  async changePassword(id: string, changePasswordDto: ChangePasswordDto) {
    console.log({ changePasswordDto, id }, 2);

    const user = await this.usersService.getById(id);
    if (user) {
      const isValidOldPassword = await compare(
        changePasswordDto.oldPassword,
        user.password,
      );
      if (isValidOldPassword) {
        throw errors.invalidPassword;
      } else if (
        changePasswordDto.newPassword !== changePasswordDto.confirmNewPassword
      ) {
        throw errors.invalidNewPassConfirmation;
      } else {
        const hashedPassword = await hash(changePasswordDto.newPassword);
        this.usersService.changePassword(id, { password: hashedPassword });
      }
    } else {
      throw errors.invalidPassword;
    }
  }
}
