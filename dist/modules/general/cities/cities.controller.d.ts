import { UpdateCityDto } from './dto/update-city.dto';
import { CreateCityDto } from './dto/create-city.dto';
import { CitiesService } from './cities.service';
export declare class CitiesController {
    private readonly citiesService;
    constructor(citiesService: CitiesService);
    create(createCityDto: CreateCityDto): any;
    findAll(): any;
    getById(id: string): any;
    delete(id: string): any;
    update(id: string, updateCityDto: UpdateCityDto): any;
}
