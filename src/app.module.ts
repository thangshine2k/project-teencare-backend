import { Module } from '@nestjs/common';
import { ParentsModule } from './modules/parents/parents.module';
import { StudentsModule } from './modules/students/students.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { ClassesModule } from './modules/classes/classes.module';
import { RegistrationsModule } from './modules/registrations/registrations.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => getTypeOrmConfig(config),
      inject: [ConfigService],
    }),
    ParentsModule,
    StudentsModule,
    ClassesModule,
    RegistrationsModule,
    SubscriptionsModule,
  ],
})
export class AppModule {}
