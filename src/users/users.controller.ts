import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import {
  Controller,
  Post,
  Get,
  Delete,
  Put,
  Param,
  Body,
  UseGuards,
  Req,
  Request,
  Logger,
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiResponse,
  ApiBearerAuth,
  ApiOperation,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiUseTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    title: 'Create user',
    description: 'End-Point for create user',
  })
  // @ApiResponse({
  //   status: 201,
  //   description: 'The record has been successfully created.',
  // })
  // @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createdUserDto: CreateUserDto) {
    return this.usersService.create(createdUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get()
  @ApiOperation({
    title: 'Get all users',
    description: 'End-Point for get all users',
  })
  findAll(@Req() req: Request) {
    return req.headers;
  }

  @Get(':id')
  @ApiOperation({
    title: 'Get user by id',
    description: 'End-Point for get user by id',
  })
  getById(@Param('id') id: string) {
    return this.usersService.getById(id);
  }

  @Delete(':id')
  @ApiOperation({
    title: 'Delete user by id',
    description: 'End-Point for delete user by id',
  })
  delete(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Put(':id')
  @ApiOperation({
    title: 'Update user by id',
    description: 'End-Point for update user by id',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }
}
