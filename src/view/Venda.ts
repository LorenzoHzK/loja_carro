import Venda from "../model/Venda";

export default class VendaView {
  render(venda: Venda): void {
    const cliente = venda.getCliente();
    const vendedor = venda.getVendedor();
    const carro = venda.getCarro();

    console.log("Venda realizada:");
    console.log(cliente.apresentar());
    console.log(`Telefone: ${cliente.getTelefone()}`);
    console.log(`Idade: ${cliente.getIdade()} anos`);
    console.log(vendedor.apresentar());
    console.log(`Comissão do vendedor: R$ ${venda.getComissao().toFixed(2)}`);
    console.log(
      `Carro: ${carro.getModelo()} ${carro.getAno()} (${carro.getCor()})`,
    );
    console.log(`Valor: R$ ${venda.getValor().toFixed(2)}`);
    console.log(`Forma de pagamento: ${venda.getFormaPagamento()}`);
    console.log(
      `Data: ${venda.getData().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })}`,
    );
  }
}
