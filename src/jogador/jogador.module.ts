import { Module } from '@nestjs/common';
import { JogadorController } from './jogador.controller';
import { JogadorService } from './jogador.service';

@Module({
  imports: [],
  controllers: [JogadorController],
  providers: [JogadorService],
})
export class JogadorModule {}
