import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlunoRepository } from './repositories/aluno.repository';

@Module({
  controllers: [AlunoController],
  providers: [AlunoService, PrismaService, AlunoRepository],
})
export class AlunoModule {}
