import { HttpException } from '@nestjs/common';
export declare class AcceptedException extends HttpException {
    constructor(message?: string | object);
}
