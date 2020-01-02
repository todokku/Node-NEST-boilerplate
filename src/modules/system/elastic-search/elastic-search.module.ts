import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { Module, Global } from '@nestjs/common';
import { ElasticSearchService } from './elastic-search.service';

@Global()
@Module({
  imports: [
    ElasticsearchModule.register({
      node: process.env.ES_URI,
    }),
  ],
  providers: [ElasticSearchService],
  exports: [ElasticSearchService],
})
export class ElasticSearchModule {}
