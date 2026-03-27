import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ParentsService } from './parents.service';
import { CreateParentDto } from './dto/create-parent.dto';

@Controller('api/parents')
export class ParentsController {
  constructor(private service: ParentsService) {}

  @Post()
  create(@Body() body: CreateParentDto) {
    return this.service.create(body);
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Get()
  getAll() {
    return this.service.findAll();
  }
}
