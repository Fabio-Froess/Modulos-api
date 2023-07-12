import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlunosModulosService } from './alunos_modulos.service';
import { CreateAlunosModuloDto } from './dto/create-alunos_modulo.dto';
import { UpdateAlunosModuloDto } from './dto/update-alunos_modulo.dto';

@Controller('alunos-modulos')
export class AlunosModulosController {
  constructor(private readonly alunosModulosService: AlunosModulosService) {}

  @Post()
  create(@Body() createAlunosModuloDto: CreateAlunosModuloDto) {
    return this.alunosModulosService.create(createAlunosModuloDto);
  }

  @Get()
  findAll() {
    return this.alunosModulosService.findAll();
  }

  @Get('lista/:id')
  findOne(@Param('id') id: string) {
    return this.alunosModulosService.findOne(id);
  }

  @Get('lista-por-aluno/:id')
  findModulosByAluno(@Param('id') idAluno: string) {
    return this.alunosModulosService.findModulosByAluno(idAluno);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAlunosModuloDto: UpdateAlunosModuloDto,
  ) {
    return this.alunosModulosService.update(id, updateAlunosModuloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alunosModulosService.remove(id);
  }
}
