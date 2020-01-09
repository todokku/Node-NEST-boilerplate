import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticSearchService {
  // constructor(private readonly elasticsearchService: ElasticsearchService) {
  //   (async function() {
  //     const search = await elasticsearchService.search();
  //     console.log(
  //       search.body.hits.hits.map(obj => ({ _id: obj._id, ...obj._source })),
  //     );
  //   })();
  // }
}
