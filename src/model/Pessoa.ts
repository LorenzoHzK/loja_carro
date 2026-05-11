export default abstract class Pessoa {
  constructor(
    private nome: string,
    private cpf: string,
  ) {}

  getNome(): string {
    return this.nome;
  }

  getCpf(): string {
    return this.cpf;
  }

  abstract getDescricao(): string;

  apresentar(): string {
    return `${this.getDescricao()} | CPF: ${this.cpf}`;
  }
}
