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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_options_1 = require("../shared/options/bcrypt.options");
const errors_1 = require("../shared/constants/errors");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const constants_1 = require("../shared/constants/constants");
const bcryptjs_1 = require("bcryptjs");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
        this.createAdminIfNotExists();
    }
    async create(user) {
        const _a = (await this.userModel.create(user))._doc, { password, roles } = _a, newUser = __rest(_a, ["password", "roles"]);
        return newUser;
    }
    async update(id, user) {
        if (user.password) {
            delete user.password;
        }
        const updatedUser = await this.userModel
            .findOneAndUpdate({ _id: id }, { $set: user }, { new: true })
            .lean();
        if (updatedUser) {
            const { password } = updatedUser, finalUserObj = __rest(updatedUser, ["password"]);
            return finalUserObj;
        }
        else {
            throw errors_1.errors.documentNotFound;
        }
    }
    async changePassword(id, newPassword) {
        const changedPasswordUser = await this.userModel
            .findOneAndUpdate({ _id: id }, { $set: newPassword }, { new: true })
            .lean();
        if (changedPasswordUser) {
            const { password } = changedPasswordUser, finalUserObj = __rest(changedPasswordUser, ["password"]);
            return finalUserObj;
        }
        else {
            throw errors_1.errors.documentNotFound;
        }
    }
    async getById(id) {
        const userExisted = await this.userModel
            .findOne({
            _id: id,
        })
            .lean();
        if (userExisted) {
            const { password } = userExisted, user = __rest(userExisted, ["password"]);
            return user;
        }
        else {
            throw errors_1.errors.documentNotFound;
        }
    }
    async delete(id) {
        const userDeleted = await this.userModel
            .findOneAndDelete({ _id: id })
            .lean();
        if (userDeleted) {
            throw errors_1.errors.deletedSuccessfully;
        }
        else {
            throw errors_1.errors.documentNotFound;
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
            email: new RegExp(constants_1.constants.admin.email),
        })
            .lean();
        if (!adminExists) {
            const password = await bcryptjs_1.hash(constants_1.constants.admin.password, bcrypt_options_1.bcryptOptions.rounds);
            await this.userModel.create({
                name: constants_1.constants.admin.name,
                email: constants_1.constants.admin.email,
                password,
                roles: constants_1.constants.admin.roles,
            });
            common_1.Logger.log('Admin account created', 'Custom-Log');
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map