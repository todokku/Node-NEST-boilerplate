import { UserLoginDto } from '../auth/dto/user-login.dto';
import { User } from './interfaces/user.interface';
import { Injectable, Logger, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

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

  getByEmail(email) {
    try {
      return this.userModel.findOne({ email });
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
