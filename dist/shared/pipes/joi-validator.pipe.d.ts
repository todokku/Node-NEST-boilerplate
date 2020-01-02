/// <reference types="hapi__joi" />
import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import * as Joi from '@hapi/joi';
export declare class JoiValidatorPipe implements PipeTransform {
    private readonly propertyName;
    private readonly joiSchema;
    constructor(propertyName: string, joiSchema: Joi.ObjectSchema);
    transform(body: any, metadata: ArgumentMetadata): any;
}
