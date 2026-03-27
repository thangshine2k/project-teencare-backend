import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registration } from './registrations.entity';

@Injectable()
export class RegistrationsService {
  constructor(
    @InjectRepository(Registration)
    private readonly repo: Repository<Registration>,
  ) {}

  async register(studentId: number, classId: number) {
    const existed = await this.repo.findOne({
      where: { studentId, classId },
    });

    if (existed) {
      return {
        message: 'Student already registered this class',
      };
    }

    const registration = this.repo.create({
      studentId,
      classId,
    });

    return this.repo.save(registration);
  }
}
