import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import ormConfig from './config/orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario/model/usuario.model';
import { ConfigModule } from '@nestjs/config';
import { NotaController } from './nota/nota.controller';
import { NotaService } from './nota/nota.service';
import { Nota } from './nota/model/nota.model';
import { EtiquetaController } from './etiqueta/etiqueta.controller';
import { EtiquetaService } from './etiqueta/etiqueta.service';
import { Etiqueta } from './etiqueta/model/etiqueta.model';
import { Producto } from './producto/model/producto.model';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from './producto/producto.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig
    }),
    TypeOrmModule.forFeature([Usuario, Nota, Etiqueta, Producto])
  ],
  controllers: [AppController, UsuarioController, NotaController, EtiquetaController, ProductoController],
  providers: [UsuarioService, NotaService, EtiquetaService, ProductoService],
})
export class AppModule {}