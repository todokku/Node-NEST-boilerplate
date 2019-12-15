import { ChangePasswordDto } from './dto/change-password-dto';
import { ObjectId } from 'mongoose';
import { IUser } from './../users/interfaces/user.interface';
import { UsersService } from './../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUserJWT } from './interfaces/jwt-user';
export declare class AuthService {
    private readonly jwtService;
    private readonly usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    validateUser(username: string, pass: string): Promise<any>;
    login(userLogin: any): Promise<{
        bearer_token: string;
    }>;
    register(user: IUser): Promise<any>;
    profile(id: ObjectId): Promise<any>;
    changePassword(authUser: IUserJWT, incomePasswords: ChangePasswordDto): Promise<any>;
}
