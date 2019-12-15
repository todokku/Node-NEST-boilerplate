import { BaseUpdateClass } from '../../shared/base/dto/base-update-class';
import { IsMongoId, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCityDto extends BaseUpdateClass {}
