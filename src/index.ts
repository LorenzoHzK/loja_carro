import Carro from "./model/Carro";
import { ModeloCarro, CorCarro } from "./model/CarroEnums";
import Loja from "./model/Loja";
import { FormaPagamento } from "./model/FormaPagamento";

import ClienteService from "./service/ClienteService";
import VendedorService from "./service/VendedorService";
import VendaService from "./service/VendaService";

import ClienteController from "./controller/Cliente";
import VendedorController from "./controller/Vendedor";
import VendaController from "./controller/Venda";

import ClienteView from "./view/Cliente";
import VendedorView from "./view/Vendedor";
import VendaView from "./view/Venda";

import ConsoleInput from "./utils/ConsoleInput";

const main = async (): Promise<void> => {
  const inputHelper = new ConsoleInput();

  const loja = new Loja(
    "Concessionária XYZ",
    "(11) 9999-9999",
    500000,
    "Av. Brasil, 1000",
  );

  const clienteService = new ClienteService();
  const vendedorService = new VendedorService();
  const vendaService = new VendaService(loja);

  const clienteController = new ClienteController(clienteService);
  const vendedorController = new VendedorController(vendedorService);
  const vendaController = new VendaController(vendaService);

  const clienteView = new ClienteView();
  const vendedorView = new VendedorView();
  const vendaView = new VendaView();

  console.log("SISTEMA DE VENDA DE CARROS");

  const nomeCliente = await inputHelper.pedirTexto("Nome do cliente: ");
  const cpfCliente = await inputHelper.pedirTexto("CPF do cliente: ");
  const saldoCliente = await inputHelper.pedirNumero("Saldo disponível (R$): ");
  const telefoneCliente = await inputHelper.pedirTexto("Telefone do cliente: ");
  const idadeCliente = await inputHelper.pedirInteiro("Idade do cliente: ");

  const cliente = clienteController.criarCliente(
    nomeCliente,
    cpfCliente,
    saldoCliente,
    idadeCliente,
    telefoneCliente,
  );

  console.log("\n");
  clienteView.render(cliente);

  const nomeVendedor = await inputHelper.pedirTexto("\nNome do vendedor: ");
  const cpfVendedor = await inputHelper.pedirTexto("CPF do vendedor: ");
  const vendasVendedor = await inputHelper.pedirInteiro("Número de vendas: ");
  const salarioVendedor = await inputHelper.pedirNumero("Salário base (R$): ");
  const comissaoVendedor = await inputHelper.pedirNumero(
    "Percentual de comissão (0-1): ",
  );

  const vendedor = vendedorController.criarVendedor(
    nomeVendedor,
    cpfVendedor,
    vendasVendedor,
    salarioVendedor,
    comissaoVendedor,
  );

  console.log("\n");
  vendedorView.render(vendedor);

  const modeloCarro = await inputHelper.escolherModeloCarro();
  const corCarro = await inputHelper.escolherCorCarro();

  const carro = new Carro(modeloCarro, corCarro);

  if (cliente.getSaldo() < carro.getValor()) {
    console.error(
      `\n Saldo insuficiente! O carro custa R$ ${carro
        .getValor()
        .toFixed(
          2,
        )} e o cliente tem apenas R$ ${cliente.getSaldo().toFixed(2)}.`,
    );
    inputHelper.fechar();
    return;
  }

  const formaPagamento = await inputHelper.escolherFormaPagamento();

  try {
    const venda = vendaController.criarVenda(
      cliente,
      vendedor,
      carro,
      formaPagamento,
    );

    console.log("\n");
    vendaView.render(venda);

    console.log("VENDA CONCLUÍDA!");

    console.log(`Saldo final da loja: R$ ${loja.getSaldo().toFixed(2)}`);
    console.log(`Saldo final do cliente: R$ ${cliente.getSaldo().toFixed(2)}`);
    console.log(`Total de vendas do vendedor: ${vendedor.getVendas()}\n`);
  } catch (erro) {
    if (erro instanceof Error) {
      console.error(`\n Erro na venda: ${erro.message}\n`);
    } else {
      console.error("\n Erro desconhecido ao processar a venda.\n");
    }
  } finally {
    inputHelper.fechar();
  }
};

main();
