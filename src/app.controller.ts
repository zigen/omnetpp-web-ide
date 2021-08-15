import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guards';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @UseGuards(LocalAuthGuard)
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  index() {
    return `<!DOCTYPE html>
    <html>
    <head>
      <script src="/public/qtloader.js" type="application/javascript"></script>
      <script src="/main.js" type="module"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    </head>
    <body>
    </body>
    </html>`;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Get('me')
  async me(@Request() req) {
    const { email, name } = req.user;
    return { email, name };
  }
}
