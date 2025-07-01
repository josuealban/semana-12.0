import{ IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateIngredienteDto {
@IsNotEmpty()
@IsString()
nombre: string;

@IsNotEmpty()
@IsNumber()
precio: number;

@IsOptional()
@IsString()
unidad?: string;
}