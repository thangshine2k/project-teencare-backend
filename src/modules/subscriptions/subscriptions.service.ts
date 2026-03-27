import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './subscriptions.entity';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subRepo: Repository<Subscription>,
  ) {}

  async create(dto: CreateSubscriptionDto): Promise<Subscription> {
    const entity = this.subRepo.create({
      studentId: dto.studentId,
      packageName: dto.packageName,
      usedSessions: 0,
    });

    return this.subRepo.save(entity);
  }

  async use(id: number) {
    const sub = await this.subRepo.findOneBy({ id });

    if (!sub) {
      throw new NotFoundException('Subscription not found');
    }

    if (sub.usedSessions >= sub.totalSessions) {
      throw new BadRequestException('No sessions left');
    }

    sub.usedSessions += 1;
    return this.subRepo.save(sub);
  }

  async get(id: number): Promise<Subscription> {
    const sub = await this.subRepo.findOneBy({ id });

    if (!sub) {
      throw new NotFoundException('Subscription not found');
    }

    return sub;
  }
}
