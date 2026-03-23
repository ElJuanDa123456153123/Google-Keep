import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Producto } from "./model/producto.model";

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private readonly productoRepository: Repository<Producto>,
    ) {}

    async getAll(): Promise<Producto[]> {
        return this.productoRepository.find();
    }

    async getById(id: number): Promise<Producto> {
        const producto = await this.productoRepository.findOne({ where: { id } });

        if (!producto) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }

        return producto;
    }

    async saveOrUpdate(data: Partial<Producto>): Promise<Producto> {
        if (!data.id || data.id === 0) {
            const nuevoProducto = this.productoRepository.create(data);
            return this.productoRepository.save(nuevoProducto);
        }
        const existe = await this.getById(data.id);

        const productoActualizado = this.productoRepository.merge(existe, data);
        return this.productoRepository.save(productoActualizado);
    }

    async deleteById(id: number): Promise<void> {
        await this.getById(id);
        await this.productoRepository.delete(id);
    }
}