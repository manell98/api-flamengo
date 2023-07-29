import { Injectable, Logger } from '@nestjs/common';
import { Jogador } from "./interfaces/Jogador";

@Injectable()
export class JogadorService {
  logger: Logger = new Logger(JogadorService.name);

  arrayJogadores: Array<Jogador> = [
    {
      nome: "Gabriel",
      sobrenome: "Barbosa",
      numeroCamisa: 10,
    }
  ];

  listarJogadores(): Array<Jogador> {
    this.logger.debug("Método listarJogadores -> Retornando uma lista dos jogadores...");

    return this.arrayJogadores;
  }
}
