import { Controller, Get } from '@nestjs/common';
import { JogadorService } from './jogador.service';
import { Jogador } from "./interfaces/Jogador";

@Controller("jogador")
export class JogadorController {
  constructor(private readonly appService: JogadorService) {}

  @Get()
  listarJogadores(): Array<Jogador> {
    return this.appService.listarJogadores();
  }
}
