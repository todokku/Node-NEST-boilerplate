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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_options_1 = require("./../shared/options/bcrypt.options");
const errors_1 = require("../shared/constants/errors");
const users_service_1 = require("./../users/users.service");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
let AuthService = class AuthService {
    constructor(jwtService, usersService) {
        this.jwtService = jwtService;
        this.usersService = usersService;
    }
    async validateUser(username, pass) {
        const user = await this.usersService.getByEmail(username);
        if (user && user.password === pass) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    async login(userLogin) {
        const user = await this.usersService.getByEmail(userLogin.email);
        if (user) {
            const isPassCorrect = await bcryptjs_1.compare(userLogin.password, user.password);
            if (isPassCorrect) {
                return {
                    bearer_token: this.jwtService.sign({
                        _id: user._id,
                        email: user.email,
                        roles: user.roles,
                    }),
                };
            }
            else {
                throw errors_1.errors.invalidEmailOrPassword;
            }
        }
        else {
            throw errors_1.errors.invalidEmailOrPassword;
        }
    }
    async register(user) {
        const _a = await this.usersService.create(user), { password } = _a, createdUser = __rest(_a, ["password"]);
        return createdUser;
    }
    profile(id) {
        return this.usersService.getById(id);
    }
    async changePassword(authUser, incomePasswords) {
        if (incomePasswords.newPassword !== incomePasswords.confirmNewPassword) {
            throw errors_1.errors.invalidNewPassConfirmation;
        }
        else {
            const user = await this.usersService.getByEmail(authUser.email);
            if (user) {
                const isValidOldPassword = await bcryptjs_1.compare(incomePasswords.oldPassword, user.password);
                if (isValidOldPassword) {
                    const hashedPassword = await bcryptjs_1.hash(incomePasswords.newPassword, bcrypt_options_1.bcryptOptions.rounds);
                    return await this.usersService.changePassword(authUser._id, {
                        password: hashedPassword,
                    });
                }
                else {
                    throw errors_1.errors.invalidPassword;
                }
            }
            else {
                throw errors_1.errors.invalidPassword;
            }
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map