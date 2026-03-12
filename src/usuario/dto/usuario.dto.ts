import { IsEmail, IsInt, IsString, Min, MinLength } from 'class-validator';

export class UsuarioDto {
    id: number;

    @IsString()
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    name: string;

    @IsEmail({}, { message: 'El email no es válido' })
    email: string;

    @IsString()
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;
}