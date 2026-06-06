import Pessoa from "./Pessoa";
import MyErro from "../error/MyErro";

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
      throw new MyErro(
        `Saldo insuficiente para realizar a compra. Saldo disponível: R$ ${this.saldo.toFixed(
          2,
        )}. Valor da compra: R$ ${valor.toFixed(2)}.`,
      );
    }

    this.saldo -= valor;
  }

  override getDescricao(): string {
    return `Cliente ${this.getNome()} (${this.getTelefone()})`;
  }
}
