import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [forwardRef(()=>UsersModule), JwtModule.register({ // forwardRef =permite que você defina uma referência "atrasada" a um módulo ou serviço, evitando problemas de inicialização circular(um referenciando o outro infinitamente).
    global: true,
    secret: process.env.SECRET_KEY || '', // "|| - tentar encontrar o valor senão usar campo vazio"
    signOptions: { expiresIn: '60m' }
  })],
  controllers: [AuthController],
  providers: [AuthService],

})
export class AuthModule {}
