import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Usuario } from "src/usuario/model/usuario.model"; // ← corregido

export default registerAs(
    'orm.config',
    (): TypeOrmModuleOptions => ({
        type: 'postgres',
        host: '127.0.0.1',
        port: 5433,          // ← corregido: era 5433
        username: 'sa',
        password: '1844',
        database: 'googlekeep-db',
        entities: [Usuario], // ← corregido: era UsuarioModel
        synchronize: true,
    }),
);
//Crear el servicio usuario.service.ts y llevar toda la logica de programacion del controler a dicho servicio