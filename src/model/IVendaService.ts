import Carro from "./Carro";
import Cliente from "./Cliente";
import Vendedor from "./Vendedor";
import Venda from "./Venda";
import { FormaPagamento } from "./FormaPagamento";

export default interface IVendaService {
  processarVenda(
    cliente: Cliente,
    vendedor: Vendedor,
    carro: Carro,
    formaPagamento: FormaPagamento,
    data?: Date,
  ): Venda;
}
