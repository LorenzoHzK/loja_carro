import VendedorService from "../service/VendedorService";

export default class VendedorController {
  constructor(private vendedorService: VendedorService) {}

  criarVendedor(
    nome: string,
    cpf: string,
    vendas: number,
    salario: number,
    comissao: number,
  ) {
    return this.vendedorService.criarVendedor(
      nome,
      cpf,
      vendas,
      salario,
      comissao,
    );
  }

  listarVendedores() {
    return this.vendedorService.listarVendedores();
  }
}
