import { Injectable } from '@nestjs/common';
import { CreateAlunosModuloDto } from './dto/create-alunos_modulo.dto';
import { UpdateAlunosModuloDto } from './dto/update-alunos_modulo.dto';
import { AlunosModulosRepository } from './repositories/alunos_modulos.repository';

@Injectable()
export class AlunosModulosService {
  constructor(private readonly repository: AlunosModulosRepository) {}

  create(createAlunosModuloDto: CreateAlunosModuloDto) {
    return this.repository.create(createAlunosModuloDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateAlunosModuloDto: UpdateAlunosModuloDto) {
    return this.repository.update(id, updateAlunosModuloDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
