"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let MongoPointToLatLngInterceptor = class MongoPointToLatLngInterceptor {
    intercept(context, next) {
        const c1 = context.getHandler();
        const n1 = next.handle();
        return next.handle();
    }
};
MongoPointToLatLngInterceptor = __decorate([
    common_1.Injectable()
], MongoPointToLatLngInterceptor);
exports.MongoPointToLatLngInterceptor = MongoPointToLatLngInterceptor;
//# sourceMappingURL=mongo-point-to-lat-lng.interceptor.js.map