// import { Injectable, NestMiddleware } from '@nestjs/common';

// @Injectable()
// export class CsrfMiddleware implements NestMiddleware {
//   use(req: any, res: any, next: () => void) {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     next();
//   }
// }

// export const CsrfMiddleware = (req, res, next) => {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   next();
// };
