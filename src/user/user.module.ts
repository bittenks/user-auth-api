import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // O repositório do User
  ],
  providers: [UserService],
  exports: [UserService], // Exporte o UserService
})
export class UserModule {}
