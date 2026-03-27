import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParentsService } from './parents.service';
import { ParentsController } from './parents.controller';
import { Parent } from './parents.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parent])], // 👈 bắt buộc
  providers: [ParentsService],
  controllers: [ParentsController],
})
export class ParentsModule {}
