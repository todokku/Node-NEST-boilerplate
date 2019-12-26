import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class JoiPropertyValidationPipe implements PipeTransform {
    transform(property: any, metadata: ArgumentMetadata): void;
}
