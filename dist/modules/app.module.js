"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_module_1 = require("./general/restaurants/restaurants.module");
const cities_module_1 = require("./general/cities/cities.module");
const users_module_1 = require("./system/security/users/users.module");
const auth_module_1 = require("./system/security/auth/auth.module");
const mongoose_options_1 = require("./../shared/options/mongoose.options");
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const elastic_search_module_1 = require("./system/elastic-search/elastic-search.module");
const mongoose_2 = require("mongoose");
const countries_module_1 = require("./general/countries/countries.module");
const mongooseUpdateDocumentVersion = require("mongoose-update-document-version");
mongoose_2.plugin(mongooseUpdateDocumentVersion);
const timestamps = require("mongoose-timestamp");
mongoose_2.plugin(timestamps);
const mongooseDelete = require("mongoose-delete");
mongoose_2.plugin(mongooseDelete, { deletedAt: true });
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.DB_URI.replace('{{dbName}}', process.env.DATABASE_NAME), mongoose_options_1.mongooseOptions),
            elastic_search_module_1.ElasticSearchModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join('.', 'public'),
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            cities_module_1.CitiesModule,
            restaurants_module_1.RestaurantsModule,
            countries_module_1.CountriesModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map