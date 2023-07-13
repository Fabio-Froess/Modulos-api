import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { UsuarioEntity } from '../entities/usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity> {
    const usuarioExiste = await this.prisma.usuario.findFirst({
      where: {
        usuario: createUsuarioDto.usuario,
      },
    });

    if (usuarioExiste) {
      throw new ConflictException('Usuário já existe!!');
    }
    return this.prisma.usuario.create({
      data: createUsuarioDto,
    });
  }

  async findAll(): Promise<UsuarioEntity[]> {
    return this.prisma.usuario.findMany();
  }

  async findOne(id: string): Promise<UsuarioEntity> {
    return this.prisma.usuario.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UsuarioEntity> {
    const usuarioExiste = await this.prisma.usuario.findFirst({
      where: {
        id,
      },
    });

    if (!usuarioExiste) {
      throw new ConflictException('Usuário não existe!!');
    }
    return this.prisma.usuario.update({
      where: {
        id,
      },
      data: updateUsuarioDto,
    });
  }

  async remove(id: string): Promise<UsuarioEntity> {
    const usuarioExiste = await this.prisma.usuario.findFirst({
      where: {
        id,
      },
    });

    if (!usuarioExiste) {
      throw new ConflictException('Esse usuario não existe!!');
    }
    return this.prisma.usuario.delete({
      where: {
        id,
      },
    });
  }
}
