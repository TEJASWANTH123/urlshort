// auth.service.ts

import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user && user.password === password) {
      // If credentials are valid, return the user without the password
      const { password, ...result } = user;
      return result;
    }

    return null; // Return null if user is not found or credentials are invalid
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    const accessToken = this.jwtService.sign(payload);
    return {
      access_token: accessToken,
      user,
    };
  }
  async logout(user: any): Promise<void> {
       console.log(`User logged out: ${user}`);
  }
}
