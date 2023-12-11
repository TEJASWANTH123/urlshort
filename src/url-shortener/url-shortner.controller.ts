// url-shortener.controller.ts

import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UrlShortenerService } from './url-shortner.service';

@Controller('url-shortener')
export class UrlShortenerController {
  constructor(private urlShortenerService: UrlShortenerService) {}

 // @UseGuards(AuthGuard('local'))
  @Post('generate')
  async generateShortUrl(@Body('originalUrl') originalUrl: string): Promise<string> {
    // You may not need to access the user ID in this version

    const shortUrl = await this.urlShortenerService.generateShortUrl(originalUrl);
    return shortUrl;
  }
}
