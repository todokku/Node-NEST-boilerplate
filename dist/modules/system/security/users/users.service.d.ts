import { User } from './classes/user';
import { IChangePassword } from './../auth/interfaces/change-password';
import { IUser } from './interfaces/user.interface';
import { Model, ObjectId } from 'mongoose';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    create(user: IUser): Promise<User>;
    update(id: ObjectId, user: IUser): Promise<User>;
    changePassword(id: ObjectId, newPassword: IChangePassword): Promise<User>;
    getById(id: ObjectId): Promise<User>;
    delete(id: ObjectId): Promise<User>;
    getByEmail(email: any): Promise<User>;
    getAll(): Promise<User[]>;
    createAdminIfNotExists(): Promise<void>;
}
