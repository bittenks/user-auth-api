import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]), // Importando o repositório de Task
  ],
  providers: [TaskService],
  exports: [TaskService], // Exporte o TaskService se for necessário em outros módulos
})
export class TaskModule {}
