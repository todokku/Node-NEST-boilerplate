/// <reference types="hapi__joi" />
import * as Joi from '@hapi/joi';
export declare const locationValidator: Joi.ObjectSchema<{
    latitude: unknown;
    longitude: unknown;
}>;
