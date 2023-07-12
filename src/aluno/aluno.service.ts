import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { AlunoRepository } from './repositories/aluno.repository';

@Injectable()
export class AlunoService {
  constructor(private readonly repository: AlunoRepository) {}

  create(createAlunoDto: CreateAlunoDto) {
    return this.repository.create(createAlunoDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateAlunoDto: UpdateAlunoDto) {
    return this.repository.update(id, updateAlunoDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
