import { Document } from 'mongoose';
// import { IsMongoId } from 'class-validator';
// import { ApiModelProperty } from '@nestjs/swagger';

export interface Restaurant extends Document {
  // id: string;
  city: string;
  image: string;
  name: string;
  email: string;
  location: string;
}
