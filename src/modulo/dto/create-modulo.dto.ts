import { IsNotEmpty, IsString } from 'class-validator';

export class CreateModuloDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
