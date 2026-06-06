import path from "path";
import BancoJson from "./BancoJson";
import Venda from "../model/Venda";

type VendaJson = {
  cliente: {
    nome: string;
    cpf: string;
    telefone: string;
    idade: number;
  };
  vendedor: {
    nome: string;
    cpf: string;
  };
  carro: {
    modelo: string;
    cor: string;
    ano: number;
  };
  valor: number;
  formaPagamento: string;
  comissao: number;
  data: string;
};

export default class BancoVendasJson extends BancoJson<VendaJson> {
  constructor() {
    super(path.resolve(process.cwd(), "database", "vendas.json"));
  }

  salvar(venda: Venda): void {
    this.adicionar(this.converterVenda(venda));
  }

  private converterVenda(venda: Venda): VendaJson {
    const cliente = venda.getCliente();
    const vendedor = venda.getVendedor();
    const carro = venda.getCarro();

    return {
      cliente: {
        nome: cliente.getNome(),
        cpf: cliente.getCpf(),
        telefone: cliente.getTelefone(),
        idade: cliente.getIdade(),
      },
      vendedor: {
        nome: vendedor.getNome(),
        cpf: vendedor.getCpf(),
      },
      carro: {
        modelo: carro.getModelo(),
        cor: carro.getCor(),
        ano: carro.getAno(),
      },
      valor: venda.getValor(),
      formaPagamento: venda.getFormaPagamento(),
      comissao: venda.getComissao(),
      data: venda.getData().toISOString(),
    };
  }
}
