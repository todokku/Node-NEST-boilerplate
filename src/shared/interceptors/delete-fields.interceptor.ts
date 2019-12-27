import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

function deleting(object: object, fieldName: string) {
  delete object[fieldName];
  return object;
}
function deleteFromArrayOfSingleObject(data: object | object[], field: string) {
  if (Array.isArray(data)) {
    return data.map(object => {
      return deleting(object, field);
    });
  } else {
    return deleting(data, field);
  }
}

@Injectable()
export class DeleteFieldsInterceptor implements NestInterceptor {
  constructor(private fields: string | string[]) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        if (Array.isArray(this.fields)) {
          for (const field of this.fields) {
            deleteFromArrayOfSingleObject(data, field);
          }
        } else {
          const isCompaniedFields = this.fields.split(' ');
          if (isCompaniedFields.length > 1) {
            for (const field of isCompaniedFields) {
              deleteFromArrayOfSingleObject(data, field);
            }
          } else {
            deleteFromArrayOfSingleObject(data, this.fields);
          }
        }
        return data;
      }),
    );
  }
}
