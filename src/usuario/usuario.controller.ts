import { Body, Controller, Param, Post } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuariocontroller')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService
  ) {}

  @Post('getall')
  getAll() {
    return this.usuarioService.getAll();
  }

  @Post('getbyid/:id')
  getPerson(@Param('id') id: number) {
    return this.usuarioService.getPerson(id);
  }

  @Post('saveorupdate')
  saveOrUpdatePerson(@Body() data: UsuarioDto) {
    return this.usuarioService.saveOrUpdatePerson(data);
  }

  @Post('delete/:id')
  deletePerson(@Param('id') id: number) {
    return this.usuarioService.deletePerson(id);
  }
}