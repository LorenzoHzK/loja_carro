import Cliente from "../model/Cliente";
import ClienteService from "../service/ClienteService";

export default class ClienteController {
  constructor(private clienteService: ClienteService) {}

  criarCliente(
    nome: string,
    cpf: string,
    saldo: number,
    idade: number,
    telefone: string,
  ): Cliente {
    return this.clienteService.criarCliente(nome, cpf, saldo, idade, telefone);
  }

  listarClientes(): Cliente[] {
    return this.clienteService.listarClientes();
  }
}
