import { ElasticSearchService } from './../../system/elastic-search/elastic-search.service';
import { ICity } from './interfaces/city.interface';
import { Model } from 'mongoose';
export declare class CitiesService {
    private readonly cityModel;
    constructor(cityModel: Model<ICity>, elasticSearchService: ElasticSearchService);
    create(city: ICity): any;
    update(id: string, city: ICity): any;
    getById(id: any): any;
    delete(id: any): any;
    getAll(): any;
}
