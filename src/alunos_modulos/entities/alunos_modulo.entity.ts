import { Alunos_Modulos } from '@prisma/client';

export class AlunosModuloEntity implements Alunos_Modulos {
  id: string;
  alunoId: string;
  moduloId: string;
  nota1: number;
  nota2: number;
  nota3: number;
}
