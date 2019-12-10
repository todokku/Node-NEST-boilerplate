import { UserLoginDto } from '../auth/dto/user-login.dto';
import { User } from './interfaces/user.interface';
import { Injectable, Logger, Body, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { constants } from '../global/constants';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {
    this.createAdminIfNotExists();
  }

  async create(user: User) {
    try {
      const { password, role, ...createdUser } = await this.userModel.create(
        user,
      );
      return createdUser;
    } catch (error) {
      Logger.log(error);
    }
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

  async createAdminIfNotExists() {
    try {
      const adminExists = await this.userModel.findOne({
        email: /admin@indexgroup.net/,
      });
      if (adminExists) {
        Logger.log('Admin account exists', 'Custom');
      } else {
        await this.userModel.create({
          name: constants.admin.name,
          email: constants.admin.email,
          password: constants.admin.pass,
          role: 'Admin',
        });
        return Logger.log('Admin account created', 'Custom');
      }
    } catch (error) {
      return Logger.error(error);
    }
  }
}
