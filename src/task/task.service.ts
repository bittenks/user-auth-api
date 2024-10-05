import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { User } from '../user/user.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async createTask(descricao: string, usuario: User, responsavel?: User): Promise<Task> {
    const task = this.tasksRepository.create({ descricao, status: 'pendente', usuario, responsavel });
    return this.tasksRepository.save(task);
  }

  async updateTaskStatus(taskId: number, status: string, usuario: User): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id: taskId, usuario } });
    if (!task) {
      throw new Error('Task not found or unauthorized');
    }
    task.status = status;
    return this.tasksRepository.save(task);
  }

  async getTasksByUser(usuario: User): Promise<Task[]> {
    return this.tasksRepository.find({ where: [{ usuario }, { responsavel: usuario }] });
  }
}
