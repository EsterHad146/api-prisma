import { Fornecedor } from "@prisma/client";

export class FornecedorEntity implements Fornecedor {
    id: number;
    nome: string;
    cnpj: string;
    email: string;
    telefone: string;
    endereco: string;
    createAt: Date;
    updateAt: Date;
    userId: number;

}
