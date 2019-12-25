import { IUser } from './../../users/interfaces/user.interface';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class HiddenPasswordFieldInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(usersData => {
        if (Array.isArray(usersData)) {
          return usersData.map(userData => {
            const { password, ...user } = userData;
            return user;
          });
        } else {
          const { password, ...user } = usersData;
          return user;
        }
      }),
    );
  }
}
