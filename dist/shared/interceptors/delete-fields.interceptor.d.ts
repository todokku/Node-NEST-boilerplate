import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class DeleteFieldsInterceptor implements NestInterceptor {
    private fields;
    constructor(fields: string | string[]);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
