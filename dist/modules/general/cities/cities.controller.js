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
const roles_guard_1 = require("./../../../shared/guards/roles.guard");
const passport_1 = require("@nestjs/passport");
const update_city_dto_1 = require("./dto/update-city.dto");
const create_city_dto_1 = require("./dto/create-city.dto");
const cities_service_1 = require("./cities.service");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_decorator_1 = require("..\\..\\..\\shared\\decorators\\roles.decorator");
let CitiesController = class CitiesController {
    constructor(citiesService) {
        this.citiesService = citiesService;
    }
    create(createCityDto) {
        return this.citiesService.create(createCityDto);
    }
    findAll() {
        return this.citiesService.getAll();
    }
    getById(id) {
        return this.citiesService.getById(id);
    }
    delete(id) {
        return this.citiesService.delete(id);
    }
    update(id, updateCityDto) {
        return this.citiesService.update(id, updateCityDto);
    }
};
__decorate([
    common_1.Post(),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiOperation({
        summary: 'Create city',
        description: 'End-Point for create city',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_city_dto_1.CreateCityDto]),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({
        summary: 'Get all cities',
        description: 'End-Point for get all cities',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':_id'),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiOperation({
        summary: 'Get city by id',
        description: 'End-Point for get city by id',
    }),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "getById", null);
__decorate([
    common_1.Delete(':_id'),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiOperation({
        summary: 'Delete city by id',
        description: 'End-Point for delete city by id',
    }),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "delete", null);
__decorate([
    common_1.Put(':_id'),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiOperation({
        summary: 'Update city by id',
        description: 'End-Point for update city by id',
    }),
    __param(0, common_1.Param('_id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_city_dto_1.UpdateCityDto]),
    __metadata("design:returntype", void 0)
], CitiesController.prototype, "update", null);
CitiesController = __decorate([
    swagger_1.ApiTags('Cities'),
    common_1.UseGuards(passport_1.AuthGuard('jwt'), roles_guard_1.RolesGuard),
    swagger_1.ApiBearerAuth(),
    common_1.UseInterceptors(common_1.CacheInterceptor),
    common_1.Controller('cities'),
    __metadata("design:paramtypes", [cities_service_1.CitiesService])
], CitiesController);
exports.CitiesController = CitiesController;
//# sourceMappingURL=cities.controller.js.map