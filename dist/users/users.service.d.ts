import { IChangePassword } from './../auth/interfaces/change-password';
import { IUser } from './interfaces/user.interface';
import { Model, ObjectId } from 'mongoose';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    create(user: IUser): Promise<any>;
    update(id: ObjectId, user: IUser): Promise<any>;
    changePassword(id: ObjectId, newPassword: IChangePassword): Promise<any>;
    getById(id: ObjectId): Promise<any>;
    delete(id: ObjectId): Promise<void>;
    getByEmail(email: any): Promise<any>;
    getAll(): any;
    createAdminIfNotExists(): Promise<void>;
}
