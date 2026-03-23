import { Body, Controller, Param, Post } from "@nestjs/common";
import { NotaService } from "./nota.service";
import { NotaDto } from "./dto/nota.dto";

@Controller('notacontroller')
export class NotaController {
    constructor(private service: NotaService) {}

    @Post('getall')
    getAll() {
        return this.service.getAll();
    }

    @Post('getbyid/:id')
    getById(@Param('id') id: number) {
        return this.service.getById(id);
    }

    @Post('saveorupdate')
    saveOrUpdate(@Body() dto: NotaDto) {
        return this.service.saveOrUpdate(dto);
    }
    @Post('delete/:id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}