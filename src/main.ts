import { classValidatorOptions } from './global/options/class-validator';
import { NestFactory } from '@nestjs/core';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as rateLimit from 'express-rate-limit';

import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // cors: true,
    logger: ['error', 'warn'],
  });

  // Security: Register
  app.use(helmet());

  // Security: Rate limit
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );

  // Security: Register validator class-validator
  app.useGlobalPipes(new ValidationPipe(classValidatorOptions));

  // API-Documentation: swagger
  const options = new DocumentBuilder()
    .setTitle('Index Group task')
    .setDescription(
      'Create boilerplate using NestJS, Mongoose, Swagger, Passport',
    )
    .addBearerAuth()
    .setVersion('1.0')
    // .addTag('APIs ')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);

  Logger.log(
    `Server start on http://localhost:${process.env.PORT || 3000}/api`,
    'Custom',
  );
  const isLocalDb = /localhost|127.0.0.1/i.test(process.env.DB_URI);
  Logger.log(`Connected to ${isLocalDb ? 'local' : 'online'} DB`, 'Custom');
}
bootstrap();
