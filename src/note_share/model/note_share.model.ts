import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Nota } from "src/nota/model/nota.model";
import { Usuario } from "src/usuario/model/usuario.model";

@Entity()
export class NoteShare {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer', nullable: false })
    note_id: number;

    @Column({ type: 'integer', nullable: false })
    usuario_id: number;

    @Column({ type: 'integer', nullable: false })
    rol: number;

    @ManyToOne(() => Nota, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'note_id' })
    nota: Nota;

    @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
