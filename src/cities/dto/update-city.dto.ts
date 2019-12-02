import { BaseUpdateClass } from './../../base-update-class';
import { IsMongoId, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateCityDto extends BaseUpdateClass {
}