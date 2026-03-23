import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Etiqueta } from "./model/etiqueta.model";
import { EtiquetaDto } from "./dto/etiqueta.dto";

@Injectable()
export class EtiquetaService {

    constructor(
        @InjectRepository(Etiqueta)
        private repo: Repository<Etiqueta>
    ) {}

    getAll() {
        return this.repo.find();
    }
    getById(id: number) {
        return this.repo.findOneBy( { id });
    }
    saveOrUpdate(dto: EtiquetaDto) {
        const etiqueta = this.repo.create(dto);
        return this.repo.save(etiqueta);
    }
    async delete(id: number) {
        await this.repo.delete(id);
        return { mensaje: 'Etiqueta eliminada' };
    }
}