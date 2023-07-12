import { Module } from '@nestjs/common';
import { ModuloService } from './modulo.service';
import { ModuloController } from './modulo.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ModuloRepository } from './repositories/modulo.repository';

@Module({
  controllers: [ModuloController],
  providers: [ModuloService, PrismaService, ModuloRepository],
})
export class ModuloModule {}
