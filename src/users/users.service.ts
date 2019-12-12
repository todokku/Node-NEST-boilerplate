import { bcryptOptions } from '../shared/options/bcrypt.options';
import { errors } from '../shared/constants/errors';
import { IUser } from './interfaces/user.interface';
import {
  Injectable,
  Logger,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { constants } from '../shared/constants/constants';
import { hash } from 'bcryptjs';
import { throwError } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<IUser>,
  ) {
    this.createAdminIfNotExists();
  }

  async create(user: IUser) {
    const { password, role, ...newUser } = (
      await this.userModel.create(user)
    )._doc;
    return newUser;
  }

  async update(id: ObjectId, user: IUser) {
    if (user.password) {
      delete user.password;
    }
    const updatedUser = await this.userModel
      .findOneAndUpdate({ _id: id }, { $set: user }, { new: true })
      .lean();
    if (updatedUser) {
      const { password, ...finalUserObj } = updatedUser;
      return finalUserObj;
    } else {
      throw errors.documentNotFound;
    }
  }

  async getById(id: ObjectId) {
    const userExisted = await this.userModel
      .findOne({
        _id: id,
      })
      .lean();

    if (userExisted) {
      const { password, ...user } = userExisted;
      return user;
    } else {
      throw errors.documentNotFound;
    }
  }

  async delete(id: ObjectId) {
    const userDeleted = await this.userModel
      .findOneAndDelete({ _id: id })
      .lean();
    if (userDeleted) {
      throw errors.deletedSuccessfully;
    } else {
      throw errors.documentNotFound;
    }
  }

  async getByEmail(email) {
    return await this.userModel.findOne({ email }).lean();
  }

  getAll() {
    return this.userModel.find({}, { password: 0 }).lean();
  }

  async createAdminIfNotExists() {
    const adminExists = await this.userModel
      .findOne({
        email: new RegExp(constants.admin.email),
      })
      .lean();
    if (!adminExists) {
      const password = await hash(
        constants.admin.password,
        bcryptOptions.rounds,
      );
      await this.userModel.create({
        name: constants.admin.name,
        email: constants.admin.email,
        password,
        role: 'Admin',
      });
      Logger.log('Admin account created', 'Custom-Log');
    }
  }
}
