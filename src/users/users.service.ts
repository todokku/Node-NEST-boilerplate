import { UserLoginDto } from '../auth/dto/user-login.dto';
import { User } from './interfaces/user.interface';
import { Injectable, Logger, Body, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) /* @InjectModel('User') private readonly userModel: Model<User> */
  {}

  async validateOnUser(userLogin: UserLoginDto) {
    try {
      const user = await this.userModel
        .findOne({ email: userLogin.email })
        .lean();
      if (user && userLogin.password === user.password) {
        const { password, ...result } = user;
        return result;
      } else {
        return { error: 'Invalid Email or Password' };
      }
    } catch (error) {
      Logger.error(error);
    }
  }
  create(user: User) {
    return this.userModel.create(user);
  }

  update(id: string, user: User) {
    try {
      return this.userModel.findOneAndUpdate(
        { _id: id },
        { $set: user },
        { new: true },
      );
    } catch (error) {
      return Logger.error(error);
    }
  }

  getById(id) {
    try {
      return this.userModel.findOne({ _id: id });
    } catch (error) {
      return Logger.error(error);
    }
  }

  delete(id) {
    try {
      return this.userModel.findOneAndDelete({ _id: id });
    } catch (error) {
      return Logger.error(error);
    }
  }

  getAll() {
    try {
      return this.userModel.find();
    } catch (error) {
      return Logger.error(error);
    }
  }
}
