import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  @Redirect('https://www.youtube.com/watch?v=OCHO0GFerQc', 301)
  getHello(): void {
    return;
  }
}
