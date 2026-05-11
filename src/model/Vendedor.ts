import Pessoa from "./Pessoa";

export default class Vendedor extends Pessoa {
  constructor(
    nome: string,
    cpf: string,
    private vendas: number,
    private salario: number,
    private comissao: number,
  ) {
    super(nome, cpf);
  }

  getVendas(): number {
    return this.vendas;
  }

  getSalario(): number {
    return this.salario;
  }

  getComissao(): number {
    return this.comissao;
  }

  getComissaoPercentual(): string {
    return `${(this.comissao * 100).toFixed(0)}%`;
  }

  adicionarVenda(): void {
    this.vendas += 1;
  }

  calcularComissao(valor: number): number;
  calcularComissao(valor: number, comissaoPersonalizada: number): number;
  calcularComissao(valor: number, comissaoPersonalizada?: number): number {
    const taxa =
      comissaoPersonalizada !== undefined
        ? comissaoPersonalizada
        : this.comissao;
    return valor * taxa;
  }

  override getDescricao(): string {
    return `Vendedor ${this.getNome()} (${this.getComissaoPercentual()} de comissão)`;
  }
}
