import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseToObjectPipe implements PipeTransform {
    private readonly propertyName;
    constructor(propertyName: string);
    transform(body: any, metadata: ArgumentMetadata): any;
}
