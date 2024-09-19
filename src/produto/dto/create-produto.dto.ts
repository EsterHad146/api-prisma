import { Decimal } from "@prisma/client/runtime/library";

export class CreateProdutoDto {
    id: number;
    codBarras: number;
    nome: string;
    preco: Decimal;
    descricao: string;
    quantidade: number;
    lote: string;
    userId: number;
    fornecedorId: number;
}
