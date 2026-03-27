import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';

@Controller('api/classes')
export class ClassesController {
  constructor(private readonly service: ClassesService) {}

  @Post()
  create(@Body() body: CreateClassDto) {
    return this.service.create(body);
  }

  @Get()
  get(@Query('day') day: number) {
    return this.service.findByDay(day);
  }
}
