import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteShareController } from './note_share.controller';
import { NoteShareService } from './note_share.service';
import { NoteShare } from './model/note_share.model';
import { Nota } from 'src/nota/model/nota.model';
import { Usuario } from 'src/usuario/model/usuario.model';

@Module({
  imports: [TypeOrmModule.forFeature([NoteShare, Nota, Usuario])],
  controllers: [NoteShareController],
  providers: [NoteShareService],
})
export class NoteShareModule {}
