import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('classes')
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  subject: string;

  @Column()
  day_of_week: number;

  @Column()
  time_slot: string;

  @Column()
  teacher_name: string;

  @Column()
  max_students: number;
}
