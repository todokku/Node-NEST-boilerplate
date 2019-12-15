import { IMongoPoint } from './interfaces/mongo-point.interface';
import { RestaurantsSearchDto } from './dto/search-restaurant.dto';
// Nest modules
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiBearerAuth,
  ApiConsumes,
  ApiBody,
  ApiOperation,
} from '@nestjs/swagger';

// DTO
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

// Helpers
import { uploadFile } from '../shared/helpers/upload-file';
import { RestaurantsService } from './restaurants.service';

// Joi schema
import { locationValidator } from './validations/location.joi';

// Pipes
import { ObjectToMongoPointPipe } from './../shared/pipes/object-to-mongo-point.pipe';
import { ParseToObjectPipe } from '../shared/pipes/parse-to-object.pipe';
import { JoiValidatorPipe } from '../shared/pipes/joi-validator.pipe';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../shared/guards/roles.guard';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { LocationDto } from './dto/location.dto';

// // Constants
// const locationFiledName = 'location';

@ApiTags('Restaurants')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiBearerAuth()
@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  @Roles('admin')
  @ApiOperation({
    summary: 'Create restaurant',
    description: 'End-Point for create restaurant',
  })
  @UseInterceptors(FileInterceptor('image' /* ,{ dest: './upload', } */))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateRestaurantDto })
  create(
    @UploadedFile() image: any,
    @Body(
      new ParseToObjectPipe('location'),
      new JoiValidatorPipe('location', locationValidator),
      new ObjectToMongoPointPipe('location'),
    )
    body,
  ) {
    body.image = uploadFile({ uploadedFileType: 'images', file: image });
    return this.restaurantsService.create(body);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all restaurants',
    description: 'End-Point for get all restaurants',
  })
  findAll() {
    return this.restaurantsService.getAll();
  }

  @Post('nearest')
  @ApiOperation({
    summary: 'Find the nearest restaurant',
    description: 'End-Point for Find the nearest restaurant from a point',
  })
  nearestRestaurant(@Body(new ObjectToMongoPointPipe()) body: LocationDto) {
    return this.restaurantsService.nearestRestaurant(body);
  }

  @Post('search')
  @ApiOperation({
    summary: 'Search restaurant name',
    description: 'End-Point for Search for restaurant with it is name',
  })
  search(
    @Body()
    body: RestaurantsSearchDto,
  ) {
    return this.restaurantsService.search(body.name);
  }

  @Get('groupByCity')
  @ApiOperation({
    summary: 'Group restaurants and statistics about them within the city',
    description:
      'End-Point for Statistics about restaurants with city relation restaurant name',
  })
  groupByCity() {
    return this.restaurantsService.groupByCity();
  }

  @Get(':_id')
  @ApiOperation({
    summary: 'Get restaurant by id',
    description: 'End-Point for get restaurant by id',
  })
  getById(@Param('_id') id: string) {
    return this.restaurantsService.getById(id);
  }

  @Delete(':_id')
  @Roles('admin')
  @ApiOperation({
    summary: 'Delete restaurant by id',
    description: 'End-Point for delete restaurant by id',
  })
  delete(@Param('_id') id: string) {
    return this.restaurantsService.delete(id);
  }

  @Put(':_id')
  @Roles('admin')
  @ApiOperation({
    summary: 'Update restaurant by id',
    description: 'End-Point for update restaurant by id',
  })
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UpdateRestaurantDto })
  update(
    @Param('_id') id: string,
    @UploadedFile() image: any,
    @Body(
      new ParseToObjectPipe('location'),
      new JoiValidatorPipe('location', locationValidator),
      new ObjectToMongoPointPipe('location'),
    )
    body,
  ) {
    body.image = uploadFile({ uploadedFileType: 'images', file: image });
    return this.restaurantsService.update(id, body);
  }
}
