import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UrlShortenerModule } from './url-shortener/url-shortener.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UsersModule, AuthModule, UrlShortenerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
