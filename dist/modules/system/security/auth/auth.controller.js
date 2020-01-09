"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_decorator_1 = require("./../../../../shared/decorators/user.decorator");
const bcrypt_options_1 = require("./../../../../shared/options/bcrypt.options");
const errors_1 = require("../../../../shared/exceptions/errors");
const delete_fields_interceptor_1 = require("./../../../../shared/interceptors/delete-fields.interceptor");
const register_new_user_dto_1 = require("./dto/register-new-user.dto");
const change_password_dto_1 = require("./dto/change-password-dto");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const user_login_dto_1 = require("./dto/user-login.dto");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    login(userLogin) {
        return this.authService.login(userLogin);
    }
    logout(req) {
        req.cookies.jwt = { maxAge: Date.now() };
        return {};
    }
    async register(registerNewUserDto) {
        if (registerNewUserDto.password !== registerNewUserDto.confirmPassword) {
            throw errors_1.errors.invalidPasswordConfirmation;
        }
        else {
            registerNewUserDto.password = await bcryptjs_1.hash(registerNewUserDto.password, bcrypt_options_1.bcryptOptions.rounds);
            return this.authService.register(registerNewUserDto);
        }
    }
    profile(user) {
        return this.authService.profile(user._id);
    }
    changePassword(user, changePasswordDto) {
        return this.authService.changePassword(user, changePasswordDto);
    }
};
__decorate([
    common_1.Post('login'),
    swagger_1.ApiOperation({
        summary: 'Login user',
        description: 'End-Point for login user',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UserLoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('logout'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOperation({
        summary: 'Logout user',
        description: 'End-Point for logout user',
    }),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
__decorate([
    common_1.Post('register'),
    swagger_1.ApiOperation({
        summary: 'Register new user',
        description: 'End-Point for register new user',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_new_user_dto_1.RegisterNewUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    common_1.Post('profile'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOperation({
        summary: 'Register new user',
        description: 'End-Point for register new user',
    }),
    __param(0, user_decorator_1.User()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "profile", null);
__decorate([
    common_1.Post('change-password'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiOperation({
        summary: 'Change user password',
        description: 'End-Point for change user password',
    }),
    __param(0, user_decorator_1.User()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, change_password_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "changePassword", null);
AuthController = __decorate([
    swagger_1.ApiTags('Auth'),
    common_1.Controller('auth'),
    common_1.UseInterceptors(new delete_fields_interceptor_1.DeleteFieldsInterceptor('password')),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map