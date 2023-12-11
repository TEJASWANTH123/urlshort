// users.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private  users: User[] = [
    { userId: 1, username: 'user1', password: 'password1' },
    { userId: 2, username: 'user2', password: 'password2' },
    // Add more user data as needed
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
  async registerUser(username: string, password: string): Promise<User> {
    // Logic for user registration, e.g., storing user data in a database
    const newUser: User = {
      userId: this.users.length + 1,
      username,
      password,
    };
    this.users.push(newUser);
    return newUser;
  }
}

interface User {
  userId: number;
  username: string;
  password: string;
}
