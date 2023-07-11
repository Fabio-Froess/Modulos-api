import { Usuario } from '@prisma/client';

export class UsuarioEntity implements Usuario {
  usuario: string;
  id: string;
  senha: string;
}
