import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('registrations')
export class Registration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'class_id' })
  classId: number;

  @Column({ name: 'student_id' })
  studentId: number;

  @CreateDateColumn()
  createdAt: Date;
}
