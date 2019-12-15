// Build-in Node modules
import { readFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { parse, config } from 'dotenv';

// Set .env variables to process.env
config(parse(readFileSync(join('.', '.env'))));

// Init upload folder if not exist
if (!existsSync(join('.', 'public'))) {
  mkdirSync(join('.', 'public'));
}
if (!existsSync(join('.', 'public', process.env.UPLOADS_PATH))) {
  mkdirSync(join('.', 'public', process.env.UPLOADS_PATH));
}
// Build-in Nest modules
import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';

// API documentations
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { swaggerOptions } from './shared/options/swagger.options';

// API Validation
import { classValidatorOptions } from './shared/options/class-validator.options';

// Security
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
// import { AuthGuard } from '@nestjs/passport';
// import { RolesGuard } from './shared/guards/roles.guard';
// import * as csurf from 'csurf';
// import { CsrfMiddleware } from './shared/middle-wares/csrf.middleware';

// Cookies parser
import * as cookieParser from 'cookie-parser';

// Main app for all apps
import { AppModule } from './app.module';

// Errors handler
import { AllExceptionsFilter } from './shared/filters/exceptions.filter';

import * as compression from 'compression';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // cors: true,
    logger: ['error', 'warn'],
  });

  // Set global prefix before all mapped routes
  app.setGlobalPrefix('api');

  // Global exceptions filter: handle all exceptions
  app.useGlobalFilters(new AllExceptionsFilter());

  // Validation: Register validator class-validator
  app.useGlobalPipes(new ValidationPipe(classValidatorOptions));

  // Cookie parser: parse income header cookies
  app.use(cookieParser());

  // Compression: decrease the size of the response body for production
  if (process.env.NODE_ENV === 'production') {
    app.use(compression());
  }

  // API-Documentation: swagger
  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle(swaggerOptions.title)
      .setTitle(swaggerOptions.title)
      .setDescription(swaggerOptions.description)
      .addBearerAuth()
      .setVersion(swaggerOptions.version)
      .build(),
  );
  SwaggerModule.setup(swaggerOptions.initOnPath, app, document);

  // Security
  app.use(helmet()); // protect app from some vulnerabilities by setting HTTP headers appropriately
  app.use(
    // Add a limitation on hit Server
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  // app.useGlobalGuards(AuthGuard('jwt'), new RolesGuard());
  // app.use(csurf({ cookie: true })); // Cross-site request forgery: is a type of malicious exploit of a website
  // app.use(CsrfMiddleware); // Cross-site request forgery: is a type of malicious exploit of a website

  // Check port and listen on it
  if (!process.env.PORT) {
    process.env.PORT = '80';
  }
  await app.listen(Number(process.env.PORT));

  // Loggers [Db, Server]
  Logger.log(
    `Server start on http://localhost:${process.env.PORT}/api`,
    'Custom-Log',
  );
  const isLocalDb = /\/?\/?(localhost|127.0.0.1):?/i.test(process.env.DB_URI);
  Logger.log(`Connected to ${isLocalDb ? 'local' : 'online'} DB`, 'Custom-Log');
}
bootstrap();
