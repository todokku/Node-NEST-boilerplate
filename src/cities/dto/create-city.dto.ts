import { BaseDtoClass } from './../../shared/base/dto/base-dto.class';
import { BaseCreateClass } from './../../shared/base/dto/base-create-class';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCityDto extends BaseDtoClass {}
