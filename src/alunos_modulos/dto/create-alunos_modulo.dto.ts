import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAlunosModuloDto {
  @IsString()
  @IsNotEmpty()
  alunoId: string;

  @IsString()
  @IsNotEmpty()
  moduloId: string;

  @IsNumber()
  @IsOptional()
  nota1: number;

  @IsNumber()
  @IsOptional()
  nota2: number;

  @IsNumber()
  @IsOptional()
  nota3: number;
}
