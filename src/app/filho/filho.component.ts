import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  @Input() mensagemRecebida: string;
  @Output() mensagemParaEmitir = new EventEmitter<string>();

  mensagemParaEnviar = 'Olá Pai!';

  constructor() { }

  ngOnInit() {
  }

  enviarMensagemParaPai(mensagem: string) {
    this.mensagemParaEmitir.emit(mensagem);
  }

}
