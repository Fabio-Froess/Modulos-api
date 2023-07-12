import { Aluno } from '@prisma/client';

export class AlunoEntity implements Aluno {
  id: string;
  nome: string;
  cpf: string;
  data_nascimento: Date;
}
