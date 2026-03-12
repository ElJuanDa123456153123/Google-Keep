import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './model/usuario.model';
import { UsuarioDto } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private readonly repository: Repository<Usuario>
  ) {}

  getAll() {
    return this.repository.find();
  }

  getPerson(id: number) {
    return this.repository.findOneBy({ id: id });
  }

  saveOrUpdatePerson(data: UsuarioDto) {
    var message = '';
    if (data.id != undefined && data.id != null && data.id != 0) {
      this.repository.update({ id: data.id }, data);
      message = 'Se actualizo correctamente!!!';
    } else {
      this.repository.save(data);
      message = 'Se guardo correctamente!!!';
    }
    return message;
  }

  deletePerson(id: number) {
    this.repository.delete({ id: id });
    return 'Se elimino correctamente!!!';
  }
}