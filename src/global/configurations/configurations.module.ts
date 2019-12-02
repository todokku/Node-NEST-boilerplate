import { ConfigurationsService } from './configurations.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ConfigurationsService],
})
export class ConfigurationsModule {}
