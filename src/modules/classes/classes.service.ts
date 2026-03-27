import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from './classes.entity';
import { CreateClassDto } from './dto/create-class.dto';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private readonly classRepo: Repository<Class>,
  ) {}

  create(data: CreateClassDto) {
    return this.classRepo.save(data);
  }

  findByDay(day: number) {
    return this.classRepo.find({
      where: { day_of_week: day },
    });
  }
}
