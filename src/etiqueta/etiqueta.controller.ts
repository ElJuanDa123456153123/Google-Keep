import { Body, Controller, Param, Post } from "@nestjs/common";
import { EtiquetaService } from "./etiqueta.service";
import { EtiquetaDto } from "./dto/etiqueta.dto";

@Controller('EtiquetaController')
export class EtiquetaController {
    constructor(private service: EtiquetaService) {}

    @Post('getall')
    getAll() {
        return this.service.getAll();
    }

    @Post('getbyid/:id')
    getById(@Param('id') id: number) {
        return this.service.getById(id);
    }

    @Post('saveorupdate')
    saveOrUpdate(@Body() dto: EtiquetaDto) {
        return this.service.saveOrUpdate(dto);
    }
    @Post('delete/:id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}