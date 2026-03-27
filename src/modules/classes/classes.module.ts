import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from './classes.entity';
import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
