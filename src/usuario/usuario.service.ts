import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioRepository } from './repositories/usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(private readonly repository: UsuarioRepository) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.repository.create(createUsuarioDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.repository.update(id, updateUsuarioDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
