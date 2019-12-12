import { ObjectId } from 'mongoose';
import { AuthGuard } from '@nestjs/passport';
import { UpdateCityDto } from './dto/update-city.dto';
import { CreateCityDto } from './dto/create-city.dto';
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
  UseInterceptors,
  CacheInterceptor,
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiOperation,
} from '@nestjs/swagger';

@ApiUseTags('Cities')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
@UseInterceptors(CacheInterceptor)
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  @ApiOperation({
    title: 'Create city',
    description: 'End-Point for create city',
  })
  // @ApiResponse({
  //   status: 201,
  //   description: 'The record has been successfully created.',
  // })
  // @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createCityDto: CreateCityDto) {
    return this.citiesService.create(createCityDto);
  }

  @Get()
  @ApiOperation({
    title: 'Get all cities',
    description: 'End-Point for get all cities',
  })
  findAll() {
    return this.citiesService.getAll();
  }

  @Get(':_id')
  @ApiOperation({
    title: 'Get city by id',
    description: 'End-Point for get city by id',
  })
  getById(@Param('_id') _id: ObjectId) {
    return this.citiesService.getById(_id);
  }

  @Delete(':_id')
  @ApiOperation({
    title: 'Delete city by id',
    description: 'End-Point for delete city by id',
  })
  delete(@Param('_id') _id: ObjectId) {
    return this.citiesService.delete(_id);
  }

  @Put(':_id')
  @ApiOperation({
    title: 'Update city by id',
    description: 'End-Point for update city by id',
  })
  update(@Param('_id') _id: ObjectId, @Body() updateCityDto: UpdateCityDto) {
    return this.citiesService.update(_id, updateCityDto);
  }
}
