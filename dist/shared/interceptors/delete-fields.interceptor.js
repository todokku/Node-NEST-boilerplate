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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
function deleting(object, fieldName) {
    delete object[fieldName];
    return object;
}
function deleteFromArrayOfSingleObject(data, field) {
    if (Array.isArray(data)) {
        return data.map(object => {
            return deleting(object, field);
        });
    }
    else {
        return deleting(data, field);
    }
}
let DeleteFieldsInterceptor = class DeleteFieldsInterceptor {
    constructor(fields) {
        this.fields = fields;
    }
    intercept(context, next) {
        return next.handle().pipe(operators_1.map(data => {
            if (Array.isArray(this.fields)) {
                for (const field of this.fields) {
                    deleteFromArrayOfSingleObject(data, field);
                }
            }
            else {
                const isCompaniedFields = this.fields.split(' ');
                if (isCompaniedFields.length > 1) {
                    for (const field of isCompaniedFields) {
                        deleteFromArrayOfSingleObject(data, field);
                    }
                }
                else {
                    deleteFromArrayOfSingleObject(data, this.fields);
                }
            }
            return data;
        }));
    }
};
DeleteFieldsInterceptor = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], DeleteFieldsInterceptor);
exports.DeleteFieldsInterceptor = DeleteFieldsInterceptor;
//# sourceMappingURL=delete-fields.interceptor.js.map