import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAlunoDto } from '../dto/create-aluno.dto';
import { UpdateAlunoDto } from '../dto/update-aluno.dto';
import { AlunoEntity } from '../entities/aluno.entity';

@Injectable()
export class AlunoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAlunoDto: CreateAlunoDto): Promise<AlunoEntity> {
    const { nome, cpf, data_nascimento } = createAlunoDto;
    const data_nasc = new Date(data_nascimento);

    return this.prisma.aluno.create({
      data: {
        nome,
        cpf,
        data_nascimento: data_nasc,
      },
    });
  }

  async findAll(): Promise<AlunoEntity[]> {
    return this.prisma.aluno.findMany();
  }

  async findOne(id: string): Promise<AlunoEntity> {
    return this.prisma.aluno.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateAlunoDto: UpdateAlunoDto,
  ): Promise<AlunoEntity> {
    return this.prisma.aluno.update({
      where: {
        id,
      },
      data: updateAlunoDto,
    });
  }

  async remove(id: string): Promise<AlunoEntity> {
    return this.prisma.aluno.delete({
      where: {
        id,
      },
    });
  }
}
