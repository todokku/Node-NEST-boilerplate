// import { DatabaseModule } from './../database/database.module';
import { usersProviders } from './users.providers';
import { UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    // DatabaseModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService /* , ...usersProviders */],
  exports: [UsersService],
})
export class UsersModule {}
