import { ApiUseTags } from '@nestjs/swagger';
import { Controller, Post } from '@nestjs/common';

@ApiUseTags('Authorization and Authentication')
@Controller('auth')
export class AuthController {
  @Post('login')
  login() {}

  @Post('logout')
  logout() {}

  @Post('change-password')
  changePassword() {}
}
