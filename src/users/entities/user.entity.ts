import { User } from "@prisma/client";

export class UserEntity implements User{
    id: number;
    email: string;
    nome: string;
    createAt: Date;
    updateAt: Date;
    userId: number;
    
}
