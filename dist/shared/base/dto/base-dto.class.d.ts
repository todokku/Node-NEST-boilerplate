import { ObjectId } from 'mongoose';
export declare class BaseDtoClass {
    readonly _id?: ObjectId;
    readonly __v?: number;
    readonly name: string;
    deleted?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
