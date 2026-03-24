import { Body, Controller, Param, Post } from "@nestjs/common";
import { NoteShareService } from "./note_share.service";
import { NoteShareDto } from "./dto/note_share.dto";

@Controller('notesharecontroller')
export class NoteShareController {
    constructor(private service: NoteShareService) {}

    @Post('getall')
    getAll() {
        return this.service.getAll();
    }

    @Post('getbyid/:id')
    getById(@Param('id') id: number) {
        return this.service.getById(id);
    }

    @Post('create')
    create(@Body() dto: NoteShareDto) {
        return this.service.create(dto);
    }

    @Post('delete/:id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}
