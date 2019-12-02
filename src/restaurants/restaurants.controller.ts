import { CreateRestaurantDto } from './dto/create-resaurant.dto';
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiConsumes,
  ApiImplicitFile,
} from '@nestjs/swagger';

@ApiUseTags('Restaurants')
@ApiBearerAuth()
@Controller('restaurants')
export class RestaurantsController {
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiImplicitFile({
    name: 'image',
    required: true,
    description: 'Restaurant image',
  })
  create(@UploadedFile() image, @Body() body: CreateRestaurantDto) {
    return { body, image };
  }
}
