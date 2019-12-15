import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ObjectToMongoPointPipe implements PipeTransform {
  constructor(private readonly propertyName?: string) {}
  transform(body: any, metadata: ArgumentMetadata) {
    if (this.propertyName) {
      body[this.propertyName] = {
        type: 'Point',
        coordinates: [
          body[this.propertyName].longitude,
          body[this.propertyName].latitude,
        ],
      };
    } else {
      body = {
        type: 'Point',
        coordinates: [body.longitude, body.latitude],
      };
    }
    return body;
  }
}
