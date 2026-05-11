import Cliente from "../model/Cliente";

export default class ClienteService {
  private clientes: Cliente[] = [];

  criarCliente(
    nome: string,
    cpf: string,
    saldo: number,
    idade: number,
    telefone: string,
  ): Cliente {
    const cliente = new Cliente(nome, cpf, saldo, idade, telefone);
    this.clientes.push(cliente);
    return cliente;
  }

  listarClientes(): Cliente[] {
    return this.clientes;
  }

  obterCliente(cpf: string): Cliente | undefined {
    return this.clientes.find((c) => c.getCpf() === cpf);
  }
}
