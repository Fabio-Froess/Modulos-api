import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAlunosModuloDto } from '../dto/create-alunos_modulo.dto';
import { UpdateAlunosModuloDto } from '../dto/update-alunos_modulo.dto';
import { AlunosModuloEntity } from '../entities/alunos_modulo.entity';

@Injectable()
export class AlunosModulosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createAlunosModuloDto: CreateAlunosModuloDto,
  ): Promise<AlunosModuloEntity> {
    return this.prisma.alunos_Modulos.create({
      data: createAlunosModuloDto,
    });
  }

  async findAll(): Promise<AlunosModuloEntity[]> {
    return this.prisma.alunos_Modulos.findMany({
      include: {
        aluno: true,
        modulo: true,
      },
    });
  }

  async findOne(id: string): Promise<AlunosModuloEntity> {
    return this.prisma.alunos_Modulos.findUnique({
      where: {
        id,
      },
    });
  }

  async findModuloByAluno(idAluno: string): Promise<AlunosModuloEntity | any> {
    return await this.prisma.alunos_Modulos.findMany({
      where: {
        alunoId: idAluno,
      },
    });
  }

  async update(
    id: string,
    updateAlunosModuloDto: UpdateAlunosModuloDto,
  ): Promise<AlunosModuloEntity> {
    return this.prisma.alunos_Modulos.update({
      where: {
        id,
      },
      data: updateAlunosModuloDto,
    });
  }

  async remove(id: string): Promise<AlunosModuloEntity> {
    return this.prisma.alunos_Modulos.delete({
      where: {
        id,
      },
    });
  }
}
