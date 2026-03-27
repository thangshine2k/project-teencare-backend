import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('api/students')
export class StudentsController {
  constructor(private service: StudentsService) {}

  @Post()
  create(@Body() body: CreateStudentDto) {
    return this.service.create(body);
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }
}
