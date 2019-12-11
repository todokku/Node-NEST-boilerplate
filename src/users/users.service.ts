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
    const { password, ...createdUser } = await this.userModel
      .create(user);
    return createdUser;
  }

  update(_id: ObjectId, user: User) {
    if (user.password) delete user.password;
    return this.userModel.findOneAndUpdate(
      { _id },
      { $set: user },
      { new: true },
    );
  }

  async getById(_id: ObjectId) {
    const { password, ...user } = await this.userModel.findOne({
      _id,
    });
    return user;
  }

  delete(_id: ObjectId) {
    return this.userModel.findOneAndDelete({ _id });
  }

  async getByEmail(email) {
    return await this.userModel.findOne({ email }).lean();
  }

  getAll() {
    return this.userModel.find();
  }

  async createAdminIfNotExists() {
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
        role: 'Admin',
      });
      return Logger.log('Admin account created', 'Custom');
    }
  }
}
