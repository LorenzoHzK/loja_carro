import Pessoa from "./Pessoa";

export default class Cliente extends Pessoa {
  constructor(
    nome: string,
    cpf: string,
    private saldo: number,
    private idade: number,
    private telefone: string,
  ) {
    super(nome, cpf);
  }

  getSaldo(): number {
    return this.saldo;
  }

  getIdade(): number {
    return this.idade;
  }

  getTelefone(): string {
    return this.telefone;
  }

  debitarSaldo(valor: number): void {
    if (valor > this.saldo) {
      throw new Error("Saldo insuficiente para realizar a compra.");
    }

    this.saldo -= valor;
  }

  override getDescricao(): string {
    return `Cliente ${this.getNome()} (${this.getTelefone()})`;
  }
}
