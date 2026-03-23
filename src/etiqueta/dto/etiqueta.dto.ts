import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class EtiquetaDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    nombre: string;


    @IsString()
    @IsOptional()
    color: string;
}