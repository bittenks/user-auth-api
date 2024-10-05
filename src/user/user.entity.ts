import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from '../task/task.entity'; 

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Task, (task) => task.usuario) // Relacionamento com Task
  tasks: Task[];

  @OneToMany(() => Task, (task) => task.responsavel) // Relacionamento com Task como responsável
  assignedTasks: Task[];
}
