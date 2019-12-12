import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class LatLngToGeoJsonPointPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
