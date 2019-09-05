import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  mensagemParaEnviar: string = 'Filho?';
  mensagemRecebida: string = 'Pai?';

  constructor() { }

  ngOnInit() {
  }

  enviarParaFilho(mensagem: string) {
    this.mensagemParaEnviar = mensagem;
  }

  getMensagem(mensagem: string) {
    this.mensagemRecebida = mensagem;
  }

}
