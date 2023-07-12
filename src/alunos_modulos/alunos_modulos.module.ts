import { Module } from '@nestjs/common';
import { AlunosModulosService } from './alunos_modulos.service';
import { AlunosModulosController } from './alunos_modulos.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlunosModulosRepository } from './repositories/alunos_modulos.repository';

@Module({
  controllers: [AlunosModulosController],
  providers: [AlunosModulosService, PrismaService, AlunosModulosRepository],
})
export class AlunosModulosModule {}
