import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Parent } from '../parents/parents.entity';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'timestamp', nullable: true })
  dob: Date;

  @Column()
  gender: string;

  @Column()
  current_grade: string;

  @ManyToOne(() => Parent, (p) => p.students)
  @JoinColumn({ name: 'parent_id' })
  parent: Parent;
}
