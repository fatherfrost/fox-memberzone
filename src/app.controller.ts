import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  UseInterceptors,
  CacheInterceptor,
  HttpService
} from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './authentication/local-auth.guard';
import { AuthService } from './authentication/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private httpService: HttpService,
  ) {}

  @Get('orders')
  @UseInterceptors(CacheInterceptor)
  async getOrders(@Request() req) {
    return this.httpService.get('https://fox.exchange/orders');
  }

  @Get('pairs')
  @UseInterceptors(CacheInterceptor)
  async getPairs(@Request() req) {
    return this.httpService.get('https://fox.exchange/pairs');
  }
}
