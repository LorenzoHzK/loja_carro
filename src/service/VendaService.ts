import Carro from "../model/Carro";
import Cliente from "../model/Cliente";
import Loja from "../model/Loja";
import Vendedor from "../model/Vendedor";
import Venda from "../model/Venda";
import IVendaService from "../model/IVendaService";
import { FormaPagamento } from "../model/FormaPagamento";

export default class VendaService implements IVendaService {
  constructor(private loja: Loja) {}

  processarVenda(
    cliente: Cliente,
    vendedor: Vendedor,
    carro: Carro,
    formaPagamento: FormaPagamento,
    data: Date = new Date(),
  ): Venda {
    const valor = carro.getValor();
    if (cliente.getSaldo() < valor) {
      throw new Error("Saldo insuficiente para efetuar a venda.");
    }

    const comissao = vendedor.calcularComissao(valor);

    const venda = new Venda(
      cliente,
      vendedor,
      carro,
      valor,
      formaPagamento,
      data,
      comissao,
    );

    cliente.debitarSaldo(valor);
    this.loja.registrarReceita(valor);
    vendedor.adicionarVenda();

    return venda;
  }
}
