import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { Module, Global } from '@nestjs/common';
import { ElasticSearchService } from './elastic-search.service';

@Global()
@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    }),
  ],
  providers: [ElasticSearchService],
  exports: [ElasticSearchService],
})
export class ElasticSearchModule {}
