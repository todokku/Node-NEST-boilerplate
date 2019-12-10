import { UserLoginDto } from '../auth/dto/user-login.dto';
import { User } from './interfaces/user.interface';
import { Injectable, Logger, Body, Inject, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
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
      const { password, ...createdUser } = await this.userModel.create(user);
      return createdUser;
    } catch (error) {
      Logger.log(error);
    }
  }

  update(_id: ObjectId, user: User) {
    try {
      if (user.password) delete user.password;
      return this.userModel.findOneAndUpdate(
        { _id },
        { $set: user },
        { new: true },
      );
    } catch (error) {
      return Logger.error(error);
    }
  }

  async getById(_id: ObjectId) {
    try {
      const { password, ...user } = await this.userModel.findOne({
        _id,
      });
      return user;
    } catch (error) {
      return Logger.error(error);
    }
  }

  delete(_id: ObjectId) {
    try {
      return this.userModel.findOneAndDelete({ _id });
    } catch (error) {
      return Logger.error(error);
    }
  }

  async getByEmail(email) {
    try {
      const { password, ...user } = await this.userModel.findOne({ email });
      return user;
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
          password: constants.admin.password,
          roles: ['Admin', 'User'],
        });
        return Logger.log('Admin account created', 'Custom');
      }
    } catch (error) {
      return Logger.error(error);
    }
  }
}
