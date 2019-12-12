import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class GeoJsonPointToLatLngPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
