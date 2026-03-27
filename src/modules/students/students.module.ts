import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students.entity';
import { StudentsService } from './students.service';
import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
