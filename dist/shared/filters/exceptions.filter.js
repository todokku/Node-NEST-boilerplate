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
        let json = {
            path: req.url,
            statusCode: exception.status,
            message: null,
            key: undefined,
            value: undefined,
        };
        if (exception instanceof common_1.HttpException) {
            json.statusCode = exception.getStatus();
            json = exception.message;
            if (exception instanceof common_1.BadRequestException) {
                if (exception.message &&
                    Array.isArray(exception.message.message) &&
                    exception.message.message[0] instanceof class_validator_1.ValidationError) {
                    json.key = exception.message.message[0].property;
                    json.value = exception.message.message[0].value;
                    json.message = Object.values(exception.message.message[0].constraints)[0];
                }
            }
        }
        else if (exception instanceof TypeError) {
            throw new common_1.InternalServerErrorException();
            console.log({ exceptionMessage: exception.message }, 'hello');
        }
        else if (exception.constructor.name === 'MongoError') {
            if ([11000, 11001].indexOf(exception.code) >= 0) {
                json.statusCode = common_1.HttpStatus.CONFLICT;
                const keyBasic = /(!?index: )([\w."]+)/.exec(exception.message);
                const valueBasic = /({ : )([('")\w@.]+)/.exec(exception.message);
                json.key = keyBasic && keyBasic[2];
                json.value = valueBasic && valueBasic[2];
                json.message = 'Duplication Error';
            }
        }
        else {
            json.message = exception.message;
        }
        res.status(json.statusCode).json(json);
    }
};
AllExceptionsFilter = __decorate([
    common_1.Catch()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=exceptions.filter.js.map