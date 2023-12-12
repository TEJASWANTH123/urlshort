import { Controller, Post, Body, HttpException, HttpStatus,Get,Param } from '@nestjs/common';
import { UrlShortenerService } from './url-shortner.service';

@Controller('urls')
export class UrlShortenerController {
  constructor(private readonly urlShortenerService: UrlShortenerService) {}

  @Post('shorten')
  async shortenUrl(@Body() body: { originalUrl: string, userId?: number }): Promise<{ shortUrl: string }> {
    // Check if the Content-Type is application/json
    if (!body || !body.originalUrl) {
      throw new HttpException('Invalid request body. JSON with originalUrl expected.', HttpStatus.BAD_REQUEST);
    }

    const { originalUrl, userId } = body;
    const shortUrl = await this.urlShortenerService.generateShortUrl(originalUrl, userId);
    return { shortUrl };
  }
  @Get(':shortUrl')
  async resolveUrl(@Param('shortUrl') shortUrl: string): Promise<{ originalUrl: string, userId?: number } | null> {
    return this.urlShortenerService.resolveShortUrl(`https://localhost:3000/${shortUrl}`);
  }
}
