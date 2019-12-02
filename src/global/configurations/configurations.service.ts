import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from '@hapi/joi';

export type EnvConfig = Record<string, string>;
console.log(dotenv.config());
@Injectable()
export class ConfigurationsService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    // console.log(fs.readFileSync(filePath));
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .default('development'),
      PORT: Joi.number().default(3000),
      API_AUTH_ENABLED: Joi.boolean().required(),
    });

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}
