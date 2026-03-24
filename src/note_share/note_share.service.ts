import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { NoteShare } from "./model/note_share.model";
import { NoteShareDto } from "./dto/note_share.dto";
import { Nota } from "src/nota/model/nota.model";
import { Usuario } from "src/usuario/model/usuario.model";

@Injectable()
export class NoteShareService {

    constructor(
        @InjectRepository(NoteShare)
        private repo: Repository<NoteShare>,

        @InjectRepository(Nota)
        private notaRepo: Repository<Nota>,

        @InjectRepository(Usuario)
        private usuarioRepo: Repository<Usuario>
    ) {}

    getAll() {
        return this.repo.find({ relations: ['nota', 'usuario'] });
    }

    async getById(id: number) {
        const noteShare = await this.repo.findOne({
            where: { id },
            relations: ['nota', 'usuario']
        });

        if (!noteShare) {
            throw new NotFoundException(`NoteShare con ID ${id} no encontrado`);
        }

        return noteShare;
    }

    async create(dto: NoteShareDto) {
        // Verificar si la nota existe
        const nota = await this.notaRepo.findOne({ where: { id: dto.note_id } });
        if (!nota) {
            throw new NotFoundException(`Nota con ID ${dto.note_id} no encontrada`);
        }

        // Verificar si el usuario existe
        const usuario = await this.usuarioRepo.findOne({ where: { id: dto.usuario_id } });
        if (!usuario) {
            throw new NotFoundException(`Usuario con ID ${dto.usuario_id} no encontrado`);
        }

        // Verificar si ya existe la combinación note_id + usuario_id
        const exists = await this.repo.findOne({
            where: { note_id: dto.note_id, usuario_id: dto.usuario_id }
        });

        if (exists) {
            throw new ConflictException(`Este usuario ya está asociado a esta nota`);
        }

        const noteShare = this.repo.create({
            note_id: dto.note_id,
            usuario_id: dto.usuario_id,
            rol: dto.rol
        });

        return this.repo.save(noteShare);
    }

    async delete(id: number) {
        const noteShare = await this.repo.findOne({ where: { id } });
        if (!noteShare) {
            throw new NotFoundException(`NoteShare con ID ${id} no encontrado`);
        }
        await this.repo.delete(id);
        return { mensaje: 'NoteShare eliminado' };
    }
}
