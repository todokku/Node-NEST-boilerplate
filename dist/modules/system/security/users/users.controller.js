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
const delete_fields_interceptor_1 = require("./../../../../shared/interceptors/delete-fields.interceptor");
const roles_guard_1 = require("./../../../../shared/guards/roles.guard");
const update_user_dto_1 = require("./dto/update-user.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("..\\..\\..\\..\\shared\\decorators\\roles.decorator");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createdUserDto) {
        return this.usersService.create(createdUserDto);
    }
    findAll() {
        return this.usersService.getAll();
    }
    getById(id) {
        return this.usersService.getById(id);
    }
    delete(id) {
        return this.usersService.delete(id);
    }
    update(id, updateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }
};
__decorate([
    common_1.Post(),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiOperation({
        summary: 'Create user',
        description: 'End-Point for create user',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Get(),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiOperation({
        summary: 'Get all users',
        description: 'End-Point for get all users',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':_id'),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiOperation({
        summary: 'Get user by id',
        description: 'End-Point for get user by id',
    }),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getById", null);
__decorate([
    common_1.Delete(':_id'),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiOperation({
        summary: 'Delete user by id',
        description: 'End-Point for delete user by id',
    }),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "delete", null);
__decorate([
    common_1.Put(':_id'),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiOperation({
        summary: 'Update user by id',
        description: 'End-Point for update user by id',
    }),
    __param(0, common_1.Param('_id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
UsersController = __decorate([
    swagger_1.ApiTags('Users'),
    common_1.Controller('users'),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), roles_guard_1.RolesGuard),
    swagger_1.ApiBearerAuth(),
    common_1.UseInterceptors(new delete_fields_interceptor_1.DeleteFieldsInterceptor('password')),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map