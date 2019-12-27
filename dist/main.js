"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rate_limit_options_1 = require("./shared/options/rate-limit.options");
const fs_1 = require("fs");
const path_1 = require("path");
const dotenv_1 = require("dotenv");
dotenv_1.config(dotenv_1.parse(fs_1.readFileSync(path_1.join('.', '.env'))));
if (!fs_1.existsSync(path_1.join('.', 'public'))) {
    fs_1.mkdirSync(path_1.join('.', 'public'));
}
if (!fs_1.existsSync(path_1.join('.', 'public', process.env.UPLOADS_PATH))) {
    fs_1.mkdirSync(path_1.join('.', 'public', process.env.UPLOADS_PATH));
}
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_options_1 = require("./shared/options/swagger.options");
const class_validator_options_1 = require("./shared/options/class-validator.options");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./modules/app.module");
const exceptions_filter_1 = require("./shared/filters/exceptions.filter");
const compression = require("compression");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn'],
    });
    app.setGlobalPrefix('api');
    app.useGlobalFilters(new exceptions_filter_1.AllExceptionsFilter());
    app.useGlobalPipes(new common_1.ValidationPipe(class_validator_options_1.classValidatorOptions));
    app.use(cookieParser());
    if (process.env.NODE_ENV === 'production') {
        app.use(compression());
    }
    const document = swagger_1.SwaggerModule.createDocument(app, new swagger_1.DocumentBuilder()
        .setTitle(swagger_options_1.swaggerOptions.title)
        .setTitle(swagger_options_1.swaggerOptions.title)
        .setDescription(swagger_options_1.swaggerOptions.description)
        .addBearerAuth()
        .setVersion(swagger_options_1.swaggerOptions.version)
        .build());
    swagger_1.SwaggerModule.setup(swagger_options_1.swaggerOptions.initOnPath, app, document);
    app.use(helmet());
    app.use(rateLimit(rate_limit_options_1.rateLimitOptions));
    if (!process.env.PORT) {
        process.env.PORT = '80';
    }
    await app.listen(Number(process.env.PORT));
    common_1.Logger.log(`Server start on http://localhost:${process.env.PORT}/api`, 'Custom-Log');
    const isLocalDb = /\/{2}?(localhost|127.0.0.1):?/i.test(process.env.DB_URI);
    common_1.Logger.log(`Connected to ${isLocalDb ? 'local' : 'online'} DB`, 'Custom-Log');
}
bootstrap();
//# sourceMappingURL=main.js.map