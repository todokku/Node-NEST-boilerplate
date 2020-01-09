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
let CitiesService = class CitiesService {
    constructor(model) {
        this.model = model;
        console.log(this.model);
    }
    create(city) {
        return this.model.create(city);
    }
    update(id, city) {
        return this.model.findOneAndUpdate({ _id: id }, { $set: city }, { new: true });
    }
    getById(id) {
        return this.model.findOne({ _id: id });
    }
    delete(id) {
        return this.model.delete({ _id: id });
    }
    getAll() {
        return this.model.find();
    }
};
CitiesService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], CitiesService);
exports.CitiesService = CitiesService;
//# sourceMappingURL=generic.service.js.map