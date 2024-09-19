import { Injectable } from '@nestjs/common';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FornecedorEntity } from './entities/fornecedor.entity';

@Injectable()
export class FornecedorService {
  constructor (private readonly prisma :PrismaService){}
  async create(createFornecedorDto: CreateFornecedorDto) :Promise<FornecedorEntity>{
    return this.prisma.fornecedor.create({data:createFornecedorDto});
  }

  async findAll() :Promise<FornecedorEntity[]>  {
    return this.prisma.fornecedor.findMany();
  }

  async findOne(id: number) :Promise<FornecedorEntity> {
    return this.prisma.fornecedor.findUnique({where:{id}});
  }

  async update(id: number, updateFornecedorDto: UpdateFornecedorDto) :Promise<FornecedorEntity> {
    return this.prisma.fornecedor.update({where:{id}, data:updateFornecedorDto});
  }

  async remove(id: number) :Promise<FornecedorEntity> {
    return this.prisma.fornecedor.delete({where:{id}});
  }
}
