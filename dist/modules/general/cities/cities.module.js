"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cities_service_1 = require("./cities.service");
const cities_controller_1 = require("./cities.controller");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const city_schema_1 = require("./schemas/city.schema");
let CitiesModule = class CitiesModule {
};
CitiesModule = __decorate([
    common_1.Module({
        imports: [
            common_1.CacheModule.register(),
            mongoose_1.MongooseModule.forFeature([{ name: 'City', schema: city_schema_1.CitySchema }]),
        ],
        controllers: [cities_controller_1.CitiesController],
        providers: [cities_service_1.CitiesService],
    })
], CitiesModule);
exports.CitiesModule = CitiesModule;
//# sourceMappingURL=cities.module.js.map