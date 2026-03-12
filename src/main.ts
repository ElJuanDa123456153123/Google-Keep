import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // ← agregar import

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // ← debe ir DENTRO de bootstrap
  app.setGlobalPrefix('api/v1');
  var port = 3000;
  await app.listen(port);
}
bootstrap();