import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from '../task/task.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Task, (task) => task.usuario) // Referência à relação de usuário com suas tarefas
  tasks: Task[];

  @OneToMany(() => Task, (task) => task.responsavel, { nullable: true }) // Referência à relação de usuário como responsável
  assignedTasks: Task[];
}
