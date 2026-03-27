import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from './registrations.entity';
import { RegistrationsService } from './registrations.service';
import { Module } from '@nestjs/common';
import { RegistrationsController } from './registrations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Registration])],
  controllers: [RegistrationsController],
  providers: [RegistrationsService],
})
export class RegistrationsModule {}
