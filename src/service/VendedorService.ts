import Vendedor from "../model/Vendedor";

export default class VendedorService {
  private vendedores: Vendedor[] = [];

  criarVendedor(
    nome: string,
    cpf: string,
    vendas: number,
    salario: number,
    comissao: number,
  ): Vendedor {
    const vendedor = new Vendedor(nome, cpf, vendas, salario, comissao);
    this.vendedores.push(vendedor);
    return vendedor;
  }

  listarVendedores(): Vendedor[] {
    return this.vendedores;
  }

  obterVendedor(cpf: string): Vendedor | undefined {
    return this.vendedores.find((v) => v.getCpf() === cpf);
  }
}
