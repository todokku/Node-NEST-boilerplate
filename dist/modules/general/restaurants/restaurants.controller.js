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
const parse_to_object_pipe_1 = require("./../../../shared/pipes/parse-to-object.pipe");
const roles_guard_1 = require("./../../../shared/guards/roles.guard");
const search_restaurant_dto_1 = require("./dto/search-restaurant.dto");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const restaurant_dto_1 = require("./dto/restaurant.dto");
const restaurants_service_1 = require("./restaurants.service");
const location_joi_1 = require("./validations/location.joi");
const common_2 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const roles_decorator_1 = require("..\\..\\..\\shared\\decorators\\roles.decorator");
const location_dto_1 = require("./dto/location.dto");
const upload_file_1 = require("../../../shared/helpers/upload-file");
const joi_validator_pipe_1 = require("..\\..\\..\\shared\\pipes\\joi-validator.pipe");
const object_to_mongo_point_pipe_1 = require("..\\..\\..\\shared\\pipes\\object-to-mongo-point.pipe");
let RestaurantsController = class RestaurantsController {
    constructor(restaurantsService) {
        this.restaurantsService = restaurantsService;
    }
    create(image, body) {
        body.image = upload_file_1.uploadFile({ uploadedFileType: 'images', file: image });
        return this.restaurantsService.create(body);
    }
    findAll() {
        return this.restaurantsService.getAll();
    }
    nearestRestaurant(body) {
        return this.restaurantsService.nearestRestaurant(body);
    }
    search(body) {
        return this.restaurantsService.search(body.name);
    }
    groupByCity() {
        return this.restaurantsService.groupByCity();
    }
    getById(id) {
        return this.restaurantsService.getById(id);
    }
    delete(id) {
        return this.restaurantsService.delete(id);
    }
    update(id, image, body) {
        body.image = upload_file_1.uploadFile({ uploadedFileType: 'images', file: image });
        return this.restaurantsService.update(id, body);
    }
};
__decorate([
    common_1.Post(),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiOperation({
        summary: 'Create restaurant',
        description: 'End-Point for create restaurant',
    }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image')),
    swagger_1.ApiConsumes('multipart/form-data'),
    swagger_1.ApiBody({ type: restaurant_dto_1.RestaurantDto }),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Body(new parse_to_object_pipe_1.ParseToObjectPipe('location'), new joi_validator_pipe_1.JoiValidatorPipe('location', location_joi_1.locationValidator), new object_to_mongo_point_pipe_1.ObjectToMongoPointPipe('location'))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RestaurantsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({
        summary: 'Get all restaurants',
        description: 'End-Point for get all restaurants',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RestaurantsController.prototype, "findAll", null);
__decorate([
    common_1.Post('nearest'),
    swagger_1.ApiOperation({
        summary: 'Find the nearest restaurant',
        description: 'End-Point for Find the nearest restaurant from a point',
    }),
    __param(0, common_1.Body(new object_to_mongo_point_pipe_1.ObjectToMongoPointPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [location_dto_1.LocationDto]),
    __metadata("design:returntype", void 0)
], RestaurantsController.prototype, "nearestRestaurant", null);
__decorate([
    common_1.Post('search'),
    swagger_1.ApiOperation({
        summary: 'Search restaurant name',
        description: 'End-Point for Search for restaurant with it is name',
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_restaurant_dto_1.RestaurantsSearchDto]),
    __metadata("design:returntype", void 0)
], RestaurantsController.prototype, "search", null);
__decorate([
    common_1.Get('groupByCity'),
    swagger_1.ApiOperation({
        summary: 'Group restaurants and statistics about them within the city',
        description: 'End-Point for Statistics about restaurants with city relation restaurant name',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RestaurantsController.prototype, "groupByCity", null);
__decorate([
    common_1.Get(':_id'),
    swagger_1.ApiOperation({
        summary: 'Get restaurant by id',
        description: 'End-Point for get restaurant by id',
    }),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RestaurantsController.prototype, "getById", null);
__decorate([
    common_1.Delete(':_id'),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiOperation({
        summary: 'Delete restaurant by id',
        description: 'End-Point for delete restaurant by id',
    }),
    __param(0, common_1.Param('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RestaurantsController.prototype, "delete", null);
__decorate([
    common_1.Put(':_id'),
    roles_decorator_1.Roles('admin'),
    swagger_1.ApiOperation({
        summary: 'Update restaurant by id',
        description: 'End-Point for update restaurant by id',
    }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image')),
    swagger_1.ApiConsumes('multipart/form-data'),
    swagger_1.ApiBody({ type: restaurant_dto_1.RestaurantDto }),
    __param(0, common_1.Param('_id')),
    __param(1, common_1.UploadedFile()),
    __param(2, common_1.Body(new parse_to_object_pipe_1.ParseToObjectPipe('location'), new joi_validator_pipe_1.JoiValidatorPipe('location', location_joi_1.locationValidator), new object_to_mongo_point_pipe_1.ObjectToMongoPointPipe('location'))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], RestaurantsController.prototype, "update", null);
RestaurantsController = __decorate([
    swagger_1.ApiTags('Restaurants'),
    common_2.UseGuards(passport_1.AuthGuard('jwt'), roles_guard_1.RolesGuard),
    swagger_1.ApiBearerAuth(),
    common_1.Controller('restaurants'),
    __metadata("design:paramtypes", [restaurants_service_1.RestaurantsService])
], RestaurantsController);
exports.RestaurantsController = RestaurantsController;
//# sourceMappingURL=restaurants.controller.js.map