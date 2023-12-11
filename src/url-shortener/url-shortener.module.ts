// url-shortener.module.ts
import { Module } from '@nestjs/common';
import { UrlShortenerController } from './url-shortner.controller';
import { UrlShortenerService } from './url-shortner.service';
import { UsersModule } from '../users/users.module'; // Adjust the path

@Module({
  controllers: [UrlShortenerController],
  providers: [UrlShortenerService],
  imports: [UsersModule], // Make sure UsersModule is imported
 // exports:[UrlShortenerService],
})
export class UrlShortenerModule {}
