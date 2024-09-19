import { Produto } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export class ProdutoEntity implements Produto {
    id: number;
    codBarras: number;
    nome: string;
    preco: Decimal;
    descricao: string;
    quantidade: number;
    lote: string;
    createAt: Date;
    updateAt: Date;
    userId: number;
    fornecedorId: number;
    
}
