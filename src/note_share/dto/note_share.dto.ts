import { IsIn, IsNotEmpty, IsNumber } from "class-validator";

export class NoteShareDto {

    @IsNumber()
    @IsNotEmpty()
    note_id: number;

    @IsNumber()
    @IsNotEmpty()
    usuario_id: number;

    @IsNumber()
    @IsNotEmpty()
    @IsIn([1, 2, 3], { message: 'El rol debe ser 1, 2 o 3' })
    rol: number;
}
