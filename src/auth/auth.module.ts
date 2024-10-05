import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module'; // Verifique se está correto
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule, // Verifique se isso está correto
    JwtModule.register({
      secret: 'seu_segredo', // Mova para um arquivo de configuração se necessário
      signOptions: { expiresIn: '60s' }, // Configure como preferir
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
