import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Nota } from "./model/nota.model";
import { NotaDto } from "./dto/nota.dto";

@Injectable()
export class NotaService {

    constructor(
        @InjectRepository(Nota)
        private repo: Repository<Nota>
    ) {}

    getAll() {
        return this.repo.find();
    }

    getById(id: number) {
        return this.repo.findOne({
            where: { id: id }
        });
    }

    async saveOrUpdate(dto: NotaDto) {
        const nota = this.repo.create({
            titulo: dto.titulo,
            contenido: dto.contenido,
            activo: dto.activo !== undefined ? dto.activo : true
        })
        return this.repo.save(nota);
    }

    async delete(id: number) {
        const nota = await this.repo.findOne({ where: { id } });
        if (!nota) {
            throw new NotFoundException(`Nota con ID ${id} no encontrada`);
        }
        await this.repo.delete(id);
        return { mensaje: 'Nota eliminada' };
    }
}