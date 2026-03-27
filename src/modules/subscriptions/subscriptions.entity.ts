import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('subscriptions')
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'student_id' })
  studentId: number;

  @Column({ name: 'package_name' })
  packageName: string;

  @Column({ name: 'start_date', type: 'timestamp' })
  startDate: Date;

  @Column({ name: 'end_date', type: 'timestamp' })
  endDate: Date;

  @Column({ name: 'total_sessions' })
  totalSessions: number;

  @Column({ name: 'used_sessions', default: 0 })
  usedSessions: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
