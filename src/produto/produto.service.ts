import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutoEntity } from './entities/produto.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma :PrismaService){}
  async create(createProdutoDto: CreateProdutoDto) :Promise<ProdutoEntity> {
    return this.prisma.produto.create({data :createProdutoDto});
  }

  async findAll() :Promise<ProdutoEntity[]>{
    return this.prisma.produto.findMany();
  }
  
  async findOne(id: number) :Promise<ProdutoEntity>{
    return this.prisma.produto.findUnique({where:{id}});
    
  }
  
  async update(id: number, updateProdutoDto: UpdateProdutoDto) :Promise<ProdutoEntity>{
    return this.prisma.produto.update({where:{id}, data :updateProdutoDto});
  }
  
  async remove(id: number) :Promise<ProdutoEntity>{
    return this.prisma.produto.delete({where:{id}});
  }
}
