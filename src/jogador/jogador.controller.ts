import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JogadorService } from './jogador.service';
import { Jogador } from "./interfaces/Jogador";
import { CadastrarEditarJogador } from "./interfaces/CadastrarEditarJogador";

@Controller("jogador")
export class JogadorController {
  constructor(private readonly jogadorService: JogadorService) {}

  @Post()
  cadastrarJogador(@Body() body: CadastrarEditarJogador): Array<Jogador> {
    return this.jogadorService.cadastrarJogador(body);
  }

  @Get()
  listarJogadores(): Array<Jogador> {
    return this.jogadorService.listarJogadores();
  }

  @Put(':id')
  editarJogador(@Param('id') id: number, @Body() body: CadastrarEditarJogador): Array<Jogador> {
    return this.jogadorService.editarJogador(id, body);
  }

  @Delete(':id')
  excluirJogador(@Param('id') id: number): Array<Jogador> {
    return this.jogadorService.excluirJogador(id);
  }
}
