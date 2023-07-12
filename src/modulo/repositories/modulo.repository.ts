import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateModuloDto } from '../dto/create-modulo.dto';
import { UpdateModuloDto } from '../dto/update-modulo.dto';
import { ModuloEntity } from '../entities/modulo.entity';

@Injectable()
export class ModuloRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createModuloDto: CreateModuloDto): Promise<ModuloEntity> {
    return this.prisma.modulo.create({
      data: createModuloDto,
    });
  }

  async findAll(): Promise<ModuloEntity[]> {
    return this.prisma.modulo.findMany();
  }

  async findOne(id: string): Promise<ModuloEntity> {
    return this.prisma.modulo.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateModuloDto: UpdateModuloDto,
  ): Promise<ModuloEntity> {
    return this.prisma.modulo.update({
      where: {
        id,
      },
      data: updateModuloDto,
    });
  }

  async remove(id: string): Promise<ModuloEntity> {
    return this.prisma.modulo.delete({
      where: {
        id,
      },
    });
  }
}
