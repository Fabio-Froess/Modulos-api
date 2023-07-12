import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { AlunoModule } from './aluno/aluno.module';
import { ModuloModule } from './modulo/modulo.module';
import { AlunosModulosModule } from './alunos_modulos/alunos_modulos.module';

@Module({
  imports: [ConfigModule.forRoot(), UsuarioModule, AlunoModule, ModuloModule, AlunosModulosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
