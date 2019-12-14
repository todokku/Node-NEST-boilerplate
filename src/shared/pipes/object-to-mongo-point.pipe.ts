import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ObjectToMongoPointPipe implements PipeTransform {
  constructor(private readonly propertyName: string) {}
  transform(body: any, metadata: ArgumentMetadata) {
    body[this.propertyName] = {
      type: 'Point',
      coordinates: [
        body[this.propertyName].longitude,
        body[this.propertyName].latitude,
      ],
    };
    return body;
  }
}
