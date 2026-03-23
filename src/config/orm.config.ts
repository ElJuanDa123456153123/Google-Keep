import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Usuario } from "src/usuario/model/usuario.model"; // ← corregido
import { Nota } from "src/nota/model/nota.model"; // ← agregado para incluir la entidad Nota
import { Etiqueta } from "src/etiqueta/model/etiqueta.model";
import { Producto } from "src/producto/model/producto.model"; // ← agregado para incluir la entidad Producto

export default registerAs(
    'orm.config',
    (): TypeOrmModuleOptions => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432'),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [Usuario, Nota, Etiqueta, Producto],
        synchronize: true,
    }),
);