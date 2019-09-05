import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  mensagemParaEnviar: string = 'Mensagem enviada do component pai para filho através do Input';

  constructor() { }

  ngOnInit() {
  }

}
