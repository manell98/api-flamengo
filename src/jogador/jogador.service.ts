import { Injectable, Logger } from '@nestjs/common';
import { Jogador } from "./interfaces/Jogador";
import { CadastrarEditarJogador } from "./interfaces/CadastrarEditarJogador";

@Injectable()
export class JogadorService {
  logger: Logger = new Logger(JogadorService.name);

  arrayJogadores: Array<Jogador> = [
    {
      id: 1,
      nome: "Gabriel",
      sobrenome: "Barbosa",
      numeroCamisa: 10,
    }
  ];

  // Método pra auxiliar na hora de colocar o campo 'id' em sequencia
  incrementarId(): number {
    const tamanhoArray = this.arrayJogadores.length;

    return tamanhoArray + 1;
  }

  // CRUD => "C" DE CREATE
  cadastrarJogador(body: CadastrarEditarJogador): Array<Jogador> {
    this.logger.debug(`Método cadastrarJogador -> Cadastrando o jogador ${JSON.stringify(body)}...`,);

    // aqui a lógica de cadastrar jogador

    return this.arrayJogadores;
  }

  // CRUD => "R" DE READ
  listarJogadores(): Array<Jogador> {
    this.logger.debug("Método listarJogadores -> Retornando uma lista dos jogadores do Flamengo...");

    return this.arrayJogadores;
  }

  // CRUD => "U" DE UPDATE
  editarJogador(id: number, body: CadastrarEditarJogador): Array<Jogador> {
    this.logger.debug(`Método editarJogador -> Editando o jogador de id ${id}...`);

    //  aqui a lógica de editar jogador

    return this.arrayJogadores;
  }

  // CRUD => "D" DE DELETE
  excluirJogador(id: number): Array<Jogador> {
    this.logger.debug(`Método excluirJogador -> Excluindo o jogador de id ${id}...`);

    //  aqui a lógica de excluir jogador

    return this.arrayJogadores;
  }
}
