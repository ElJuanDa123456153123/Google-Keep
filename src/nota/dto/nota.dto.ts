import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";

export class NotaDto {

    @IsString()
    @MinLength(3)
    titulo: string;

    @IsString()
    @IsNotEmpty()
    contenido: string;

    @IsBoolean({message: 'El campo activo debe ser un valor booleano'})
    activo?: boolean;
}