import Vendedor from "../model/Vendedor";

export default class VendedorView {
  render(vendedor: Vendedor): void {
    console.log("Dados do vendedor:");
    console.log(vendedor.apresentar());
    console.log(`Vendas realizadas: ${vendedor.getVendas()}`);
    console.log(`Salário: R$ ${vendedor.getSalario().toFixed(2)}`);
    console.log(`Comissão: ${vendedor.getComissaoPercentual()}`);
  }
}
