import { Injectable } from '@nestjs/common';
import { CreateModuloDto } from './dto/create-modulo.dto';
import { UpdateModuloDto } from './dto/update-modulo.dto';
import { ModuloRepository } from './repositories/modulo.repository';

@Injectable()
export class ModuloService {
  constructor(private readonly repository: ModuloRepository) {}

  create(createModuloDto: CreateModuloDto) {
    return this.repository.create(createModuloDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateModuloDto: UpdateModuloDto) {
    return this.repository.update(id, updateModuloDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
