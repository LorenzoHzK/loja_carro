import Carro from "../model/Carro";
import Cliente from "../model/Cliente";
import Vendedor from "../model/Vendedor";
import Venda from "../model/Venda";
import IVendaService from "../model/IVendaService";
import { FormaPagamento } from "../model/FormaPagamento";

export default class VendaController {
  constructor(private vendaService: IVendaService) {}

  criarVenda(
    cliente: Cliente,
    vendedor: Vendedor,
    carro: Carro,
    formaPagamento: FormaPagamento,
  ): Venda;
  criarVenda(
    cliente: Cliente,
    vendedor: Vendedor,
    carro: Carro,
    formaPagamento: FormaPagamento,
    data: Date,
  ): Venda;
  criarVenda(
    cliente: Cliente,
    vendedor: Vendedor,
    carro: Carro,
    formaPagamento: FormaPagamento,
    data?: Date,
  ): Venda {
    return this.vendaService.processarVenda(
      cliente,
      vendedor,
      carro,
      formaPagamento,
      data,
    );
  }
}
