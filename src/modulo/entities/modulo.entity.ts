import { Modulo } from '@prisma/client';

export class ModuloEntity implements Modulo {
  id: string;
  nome: string;
}
