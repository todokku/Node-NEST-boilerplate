import { IUserJWT } from './interfaces/jwt-user';
import { ChangePasswordDto } from './dto/change-password-dto';
import { RegisterNewUserDto } from './dto/register-new-user.dto';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userLogin: UserLoginDto): Promise<{
        jwt_bearer_token: string;
    }>;
    logout(req: any): {};
    register(registerNewUserDto: RegisterNewUserDto): Promise<{
        _id?: string;
        name: string;
        email: string;
        roles: string[];
    }>;
    profile(user: IUserJWT): Promise<import("../users/classes/user").User>;
    changePassword(user: IUserJWT, changePasswordDto: ChangePasswordDto): Promise<import("../users/classes/user").User>;
}
