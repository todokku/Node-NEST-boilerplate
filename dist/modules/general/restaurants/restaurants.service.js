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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let RestaurantsService = class RestaurantsService {
    constructor(restaurantModel) {
        this.restaurantModel = restaurantModel;
        this.nearestRestaurant({ type: 'Point', coordinates: [12, 13] });
    }
    create(restaurant) {
        return this.restaurantModel.create(restaurant);
    }
    search(restaurantName) {
        return this.restaurantModel.find({
            name: new RegExp(restaurantName, 'i'),
        });
    }
    groupByCity() {
        return this.restaurantModel.aggregate([
            {
                $lookup: {
                    from: 'cities',
                    localField: 'cityId',
                    foreignField: '_id',
                    as: 'city',
                },
            },
            {
                $unwind: {
                    path: '$city',
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $group: {
                    _id: '$cityId',
                    city: { $first: '$city' },
                    restaurantsData: {
                        $push: {
                            restaurantId: '$_id',
                            name: '$name',
                            location: {
                                longitude: { $arrayElemAt: ['$location.coordinates', 0] },
                                latitude: { $arrayElemAt: ['$location.coordinates', 1] },
                            },
                        },
                    },
                    restaurantsCount: { $sum: 1 },
                },
            },
            {
                $addFields: {
                    'restaurants.count': '$restaurantsCount',
                    'restaurants.data': '$restaurantsData',
                },
            },
            {
                $project: {
                    _id: 0,
                    'city.__v': 0,
                    restaurantsData: 0,
                    restaurantsCount: 0,
                },
            },
        ]);
    }
    nearestRestaurant(location) {
        return this.restaurantModel.find({
            location: { $nearSphere: { $geometry: location } },
        });
    }
    update(id, restaurant) {
        return this.restaurantModel.findOneAndUpdate({ _id: id }, { $set: restaurant }, { new: true });
    }
    getById(id) {
        return this.restaurantModel.findOne({ _id: id });
    }
    delete(id) {
        return this.restaurantModel.findOneAndDelete({ _id: id });
    }
    getAll() {
        return this.restaurantModel.find();
    }
};
RestaurantsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Restaurant')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], RestaurantsService);
exports.RestaurantsService = RestaurantsService;
//# sourceMappingURL=restaurants.service.js.map