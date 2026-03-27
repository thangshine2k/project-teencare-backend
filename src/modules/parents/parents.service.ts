import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parent } from './parents.entity';
import { CreateParentDto } from './dto/create-parent.dto';

@Injectable()
export class ParentsService {
  constructor(
    @InjectRepository(Parent)
    private readonly parentRepo: Repository<Parent>,
  ) {}

  create(dto: CreateParentDto) {
    const entity = this.parentRepo.create({
      name: dto.name,
      phone: dto.phone,
      // email optional → không truyền cũng OK
    });

    return this.parentRepo.save(entity);
  }

  findById(id: number) {
    return this.parentRepo.findOne({
      where: { id },
    });
  }

  findAll() {
    return this.parentRepo.find();
  }
}
