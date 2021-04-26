import { ClientesModule } from './../clientes/clientes.module';
import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
})
export class HelloComponent {

  nome: string;
  clientes: Cliente[];

  constructor() {
    this.nome = 'Russo';

    const fulano = new Cliente('Russo', 19);
    const cicrano = new Cliente('Mateus', 20);
    const outro = new Cliente('HpX', 88);

    this.clientes = [fulano, cicrano, outro];
  }
}

class Cliente {
  constructor(
    public nome: string,
    public idade: number
  ) { }
}
