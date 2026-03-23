import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Etiqueta {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    color: string;
    @CreateDateColumn()
    created_at: Date;
    @CreateDateColumn()
    updated_at: Date;
}