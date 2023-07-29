import { NestFactory } from '@nestjs/core';
import { JogadorModule } from './jogador/jogador.module';

async function bootstrap() {
  const app = await NestFactory.create(JogadorModule);
  await app.listen(3000);
}
bootstrap();
