import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma :PrismaService){}
  async create(CreateUserDto: CreateUserDto) :Promise<UserEntity> {
    return this.prisma.user.create({data:CreateUserDto});
  }

  async findAll() :Promise<UserEntity[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) :Promise<UserEntity> {
    return this.prisma.user.findUnique({where:{id}});
  }

  async findEmailOne(email: string) :Promise<UserEntity> {
    return this.prisma.user.findUnique({where:{email}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) :Promise<UserEntity> {
    return this.prisma.user.update({where:{id}, data :updateUserDto});
  }

  async remove(id: number) :Promise<UserEntity> {
    return this.prisma.user.delete({where:{id}});
  }
}
