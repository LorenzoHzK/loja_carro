import MyErro from "../error/MyErro";
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

  calcularComissao(valor: number, comissaoPersonalizada?: number): number {
    try {
      const taxa = comissaoPersonalizada ?? this.comissao;

      if (taxa < 0 || taxa > 1) {
        throw new MyErro(
          "Percentual de comissão inválido. Informe um valor entre 0 e 1.",
        );
      }

      return valor * taxa;
    } catch (err) {
      throw new MyErro(`Não foi possível calcular a comissão do vendedor.`);
    }
  }

  override getDescricao(): string {
    return `Vendedor ${this.getNome()} (${this.getComissaoPercentual()} de comissão)`;
  }
}
