"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let jsonResponse = {
            path: request.url,
            statusCode: null,
            message: null,
            key: undefined,
            value: undefined,
        };
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            jsonResponse = exception.message;
        }
        else if (exception.constructor.name === 'MongoError') {
            if ([11000, 11001].indexOf(exception.code) >= 0) {
                status = common_1.HttpStatus.CONFLICT;
                const keyBasic = /(!?index: )([\w."]+)/.exec(exception.message);
                const valueBasic = /({ : )([('")\w@.]+)/.exec(exception.message);
                jsonResponse.key = keyBasic && keyBasic[2];
                jsonResponse.value = valueBasic && valueBasic[2];
                jsonResponse.message = 'Duplication Error';
            }
        }
        else {
            jsonResponse.message = exception.message;
        }
        response.status(status).json(jsonResponse);
        common_1.Logger.log({
            exceptionConstructorName: exception.constructor.name,
            type: 'Exception-error',
            isHttpError: exception instanceof common_1.HttpException,
        });
    }
};
AllExceptionsFilter = __decorate([
    common_1.Catch()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=exceptions.filter.js.map