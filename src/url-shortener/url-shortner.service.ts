import { Injectable } from '@nestjs/common';
import * as shortid from 'shortid';
import { UsersService } from '../users/users.service';

@Injectable()
export class UrlShortenerService {
  private shortUrls: Map<string, { originalUrl: string, userId?: number }> = new Map();

  constructor(private usersService: UsersService) {}

  async generateShortUrl(originalUrl: string, userId?: number): Promise<string> {
    const shortId = shortid.generate();
    const shortUrl = `https://teja/${shortId}`;

    // Save the short URL with user information in the in-memory storage
    this.shortUrls.set(shortUrl, { originalUrl, userId });

    return shortUrl;
  }

  async resolveShortUrl(shortUrl: string): Promise<{ originalUrl: string, userId?: number } | null> {
    // Retrieve the original URL and user information (if available) based on the short URL from the in-memory storage
    return this.shortUrls.get(shortUrl) || null;
  }
}
