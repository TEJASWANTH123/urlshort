// auth.controller.ts

import { Controller, Request, Post, UseGuards,Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
 // @UseGuards(AuthGuard('jwt')) // Assuming you have a JWT strategy
 @UseGuards(AuthGuard('local'))
  @Post('logout')
  async logout(@Request() req) {
    return this.authService.logout(req.user);

  //  return { message: 'Logout successful' };
  }
}
