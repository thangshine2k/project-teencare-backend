import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './students.entity';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>,
  ) {}

  create(dto: CreateStudentDto): Promise<Student> {
    const entity = this.studentRepo.create({
      name: dto.name,
      dob: dto.dob, // fix NaN
      gender: dto.gender || 'unknown', // nếu DTO có gender
      current_grade: dto.current_grade || 'unknown', // nếu DTO có grade
      parent: { id: dto.parentId },
    });

    return this.studentRepo.save(entity);
  }

  findById(id: number): Promise<Student | null> {
    return this.studentRepo.findOne({
      where: { id },
      relations: ['parent'],
    });
  }
}
