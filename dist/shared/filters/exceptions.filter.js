"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        console.log({
            exceptionConstructorName: exception.constructor.name,
            isHttpError: exception instanceof common_1.HttpException,
            exception,
        });
        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();
        let jsonRes = {
            path: req.url,
            error: undefined,
            statusCode: exception.status,
            message: null,
            key: undefined,
            value: undefined,
        };
        if (exception instanceof common_1.HttpException) {
            jsonRes.statusCode = exception.getStatus();
            if (typeof exception.message === 'object') {
                for (const property in exception.message) {
                    if (exception.message.hasOwnProperty(property)) {
                        jsonRes[property] = exception.message[property];
                    }
                }
            }
            else {
                jsonRes.message = exception.message;
            }
            if (exception instanceof common_1.BadRequestException) {
                if (exception.message &&
                    Array.isArray(exception.message.message) &&
                    exception.message.message[0] instanceof class_validator_1.ValidationError) {
                    jsonRes.key = exception.message.message[0].property;
                    jsonRes.value = exception.message.message[0].value;
                    jsonRes.message = Object.values(exception.message.message[0].constraints)[0];
                }
            }
        }
        else if (exception instanceof TypeError) {
            jsonRes.error = 'Not Found';
            jsonRes.statusCode = 404;
        }
        else if (exception.constructor.name === 'MongoError') {
            jsonRes.statusCode = common_1.HttpStatus.CONFLICT;
            const keyBasic = /(!?index: )([\w."]+)/.exec(exception.message);
            const valueBasic = /({ : )([('")\w@.]+)/.exec(exception.message);
            jsonRes.key = keyBasic && keyBasic[2];
            jsonRes.value = valueBasic && valueBasic[2];
            jsonRes.message = 'Duplication Error';
        }
        else {
            jsonRes.message = exception.message;
        }
        if (!jsonRes.statusCode && !exception.status) {
            common_1.Logger.log('Unhandled type of errors');
        }
        res.status(jsonRes.statusCode || exception.status || 500).json(jsonRes);
    }
};
AllExceptionsFilter = __decorate([
    common_1.Catch()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=exceptions.filter.js.map