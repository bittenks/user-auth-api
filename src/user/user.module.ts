import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthModule } from '../auth/auth.module'; // se você tiver esse módulo

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Importando o repositório de User
    AuthModule, // Caso você precise do AuthModule
  ],
  providers: [UserService],
  exports: [UserService], // Exporte o serviço se for necessário em outros módulos
})
export class UserModule {}
