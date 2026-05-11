import Cliente from "../model/Cliente";

export default class ClienteView {
  render(cliente: Cliente): void {
    console.log("Dados do cliente:");
    console.log(cliente.apresentar());
    console.log(`Idade: ${cliente.getIdade()} anos`);
    console.log(`Telefone: ${cliente.getTelefone()}`);
    console.log(`Saldo disponível: R$ ${cliente.getSaldo().toFixed(2)}`);
  }
}
