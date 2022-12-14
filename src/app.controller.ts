import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { Notification } from './notification';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() Body: Notification) {
    const { recipient_id, content, category } = Body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipient_id,
      },
    });
  }
}
