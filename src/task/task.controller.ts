import { Controller, Post, Body, UseGuards, Request, Get, Param, Patch } from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from '../user/user.service';

@Controller('tasks')
export class TaskController {
  constructor(
    private taskService: TaskService,
    private userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createTask(@Body() body, @Request() req) {
    const user = req.user;
    const responsavel = body.responsavel ? await this.userService.findByUsername(body.responsavel) : null;
    return this.taskService.createTask(body.descricao, user, responsavel);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserTasks(@Request() req) {
    const user = req.user;
    return this.taskService.getTasksByUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/status')
  async updateTaskStatus(@Param('id') id: number, @Body() body, @Request() req) {
    const user = req.user;
    return this.taskService.updateTaskStatus(id, body.status, user);
  }
}
