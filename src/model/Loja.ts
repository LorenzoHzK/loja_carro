export default class Loja {
  constructor(
    private nome: string,
    private telefone: string,
    private saldo: number,
    private endereco: string,
  ) {}

  getNome(): string {
    return this.nome;
  }

  getTelefone(): string {
    return this.telefone;
  }

  getSaldo(): number {
    return this.saldo;
  }

  getEndereco(): string {
    return this.endereco;
  }

  registrarReceita(valor: number): void {
    this.saldo += valor;
  }
}
