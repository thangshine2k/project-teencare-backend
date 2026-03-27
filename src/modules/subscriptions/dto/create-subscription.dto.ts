/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateSubscriptionDto {
  @IsNumber()
  studentId: number;

  @IsString()
  packageName: string;

  @IsOptional()
  @IsNumber()
  usedSessions?: number;
}
