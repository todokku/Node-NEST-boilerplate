import { RolesGuard } from './../../../shared/guards/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { CityDto } from './dto/city.dto';
import { CitiesService } from './cities.service';
import {
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Roles } from 'src/shared/decorators/roles.decorator';

@ApiTags('Cities')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiBearerAuth()
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  @Roles('admin')
  @ApiOperation({
    summary: 'Create city',
    description: 'End-Point for create city',
  })
  create(@Body() createCityDto: CityDto) {
    return this.citiesService.create(createCityDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all cities',
    description: 'End-Point for get all cities',
  })
  findAll() {
    return this.citiesService.getAll();
  }

  @Get(':_id')
  @Roles('admin')
  @ApiOperation({
    summary: 'Get city by id',
    description: 'End-Point for get city by id',
  })
  getById(@Param('_id') id: string) {
    return this.citiesService.getById(id);
  }

  @Delete(':_id')
  @Roles('admin')
  @ApiOperation({
    summary: 'Delete city by id',
    description: 'End-Point for delete city by id',
  })
  delete(@Param('_id') id: string) {
    return this.citiesService.delete(id);
  }

  @Put(':_id')
  @Roles('admin')
  @ApiOperation({
    summary: 'Update city by id',
    description: 'End-Point for update city by id',
  })
  update(@Param('_id') id: string, @Body() updateCityDto: CityDto) {
    return this.citiesService.update(id, updateCityDto);
  }
}
