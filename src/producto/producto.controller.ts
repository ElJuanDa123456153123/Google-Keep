import { Controller, Post, Body, Param } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoDto } from './dto/producto.dto';
import { Producto } from './model/producto.model';

@Controller('productocontroller')
export class ProductoController {
    constructor(private readonly productoService: ProductoService) {}

    @Post('getAll')
    async getAll(): Promise<Producto[]> {
        return this.productoService.getAll();
    }

    @Post('getById/:id')
    async getById(@Param('id') id: string): Promise<Producto> {
        return await this.productoService.getById(+id);
    }

    @Post('saveOrUpdate')
    async saveOrUpdate(@Body() dto: ProductoDto): Promise<Producto> {
        return await this.productoService.saveOrUpdate(dto);
    }

    @Post('delete/:id')
    async deleteById(@Param('id') id: string): Promise<void> {
        return await this.productoService.deleteById(+id);
    }
}
