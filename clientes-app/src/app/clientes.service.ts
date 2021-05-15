import { HttpClient } from '@angular/common/http';
import { Cliente } from './clientes/clientes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) { }

  getCliente(): Cliente {
    const cliente: Cliente = new Cliente();
    cliente.nome = 'Fulano de tal';
    cliente.cpf = '88888888';
    return cliente;
  }
}
