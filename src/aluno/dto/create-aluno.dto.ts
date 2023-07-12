import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  data_nascimento: string;
}
