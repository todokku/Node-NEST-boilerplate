import { CityDto } from './dto/city.dto';
import { CitiesService } from './cities.service';
export declare class CitiesController {
    private readonly citiesService;
    constructor(citiesService: CitiesService);
    create(createCityDto: CityDto): any;
    findAll(): any;
    getById(id: string): any;
    delete(id: string): any;
    update(id: string, updateCityDto: CityDto): any;
}
