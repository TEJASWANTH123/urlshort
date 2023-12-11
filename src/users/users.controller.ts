// user.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async registerUser(@Body('username') username: string, @Body('password') password: string): Promise<any> {
    const newUser = await this.userService.registerUser(username, password);
    return { message: 'User registered successfully', user: newUser };
  }
}
