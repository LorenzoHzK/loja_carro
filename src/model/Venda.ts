import { FormaPagamento } from "./FormaPagamento";
import Carro from "./Carro";
import Cliente from "./Cliente";
import Vendedor from "./Vendedor";

export default class Venda {
  constructor(
    private cliente: Cliente,
    private vendedor: Vendedor,
    private carro: Carro,
    private valor: number,
    private formaPagamento: FormaPagamento,
    private data: Date,
    private comissao: number,
  ) {}

  getCliente(): Cliente {
    return this.cliente;
  }

  getVendedor(): Vendedor {
    return this.vendedor;
  }

  getCarro(): Carro {
    return this.carro;
  }

  getValor(): number {
    return this.valor;
  }

  getFormaPagamento(): FormaPagamento {
    return this.formaPagamento;
  }

  getData(): Date {
    return this.data;
  }

  getComissao(): number {
    return this.comissao;
  }
}
