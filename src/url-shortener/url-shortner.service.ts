import { Injectable } from '@nestjs/common';
import * as shortid from 'shortid';
import { UsersService } from '../users/users.service';

@Injectable()
export class UrlShortenerService {
  private shortUrls: Map<string, { originalUrl: string, userId?: number }> = new Map();

  constructor(private usersService: UsersService) {}

  async generateShortUrl(originalUrl: string, userId?: number): Promise<string> {
    const shortId = shortid.generate();
    const shortUrl = `https://localhost:3000/${shortId}`;
  
    // Save the short URL with user information in the in-memory storage
    this.shortUrls.set(shortUrl, { originalUrl, userId });
  
    return shortUrl;
  }
  
  async resolveShortUrl(shortUrl: string): Promise<{ originalUrl: string, userId?: number } | null> {
    try {
      const resolvedUrl = this.shortUrls.get(shortUrl);
      if (!resolvedUrl) {
        console.log(`Short URL not found: ${shortUrl}`);
        return null;
      }
  
      return resolvedUrl;
    } catch (error) {
      console.error(`Error resolving short URL: ${shortUrl}`, error);
      return null;
    }
  }}
  