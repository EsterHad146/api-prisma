import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Prisma } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async signIn(body :Prisma.UserCreateInput ): Promise<Omit<UserEntity, 'senha'> & Partial<{token :string}> |any> { //Promise<Omit: Ele retornará os dados de acesso sem apresentar a senha | Partial: acrescenta outros dados
    const user = await this.usersService.findEmailOne(body.email);
    if (user?.senha !== body.senha) {
      throw new UnauthorizedException('Acesso Negado! As Informações inseridas não conferem');
    }
    const token = await this.jwtService.signAsync({sub:user.id}) //payload criptografia
    const { senha, ...result } = user;
    result[token]= token;
  
    return result;
  }
}