import { NestMiddleware } from '@nestjs/common';
export declare class CsrfMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
