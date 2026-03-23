import { IsString, IsNumber, IsBoolean, IsOptional, Min, Length, Max } from "class-validator";

export class ProductoDto {
    @IsOptional()
    @IsNumber()
    id?: number;

    @IsString()
    @Length(3, 255, { message: 'El nombre debe tener entre 3 y 255 caracteres' })
    nombre: string;

    @IsOptional()
    @IsString()
    @Length(0, 255, { message: 'La descripción no puede exceder los 255 caracteres' })
    descripcion?: string;

    @IsNumber()
    @Min(0.01, { message: 'El precio debe ser un número positivo' })
    precio: number;

    @IsOptional()
    @IsNumber()
    @Min(0, { message: 'El stock no puede ser negativo' })
    stock?: number;

    @IsOptional()
    @IsBoolean()
    activo?: boolean;
}