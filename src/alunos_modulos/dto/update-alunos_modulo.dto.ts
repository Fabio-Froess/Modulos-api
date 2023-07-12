import { PartialType } from '@nestjs/mapped-types';
import { CreateAlunosModuloDto } from './create-alunos_modulo.dto';

export class UpdateAlunosModuloDto extends PartialType(CreateAlunosModuloDto) {}
