import { jwtOptions } from './../global/options/jwt';

import { JwtStrategy } from './strategies/jwt.strategy';
/* import { LocalStrategy } from './strategies/local.strategy'; */

import { Module, Logger } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from './../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtOptions.secret,
      signOptions: jwtOptions.signOptions,
    }),
  ],
  providers: [AuthService, /* LocalStrategy, */ JwtStrategy],
  controllers: [AuthController],
  // exports: [AuthService],
})
export class AuthModule {}
