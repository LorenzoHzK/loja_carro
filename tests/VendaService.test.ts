import { describe, expect, jest, test, beforeEach } from "@jest/globals";
import VendaService from "../src/service/VendaService";
import BancoVendasJson from "../src/database/BancoVendasJson";
import Loja from "../src/model/Loja";
import Cliente from "../src/model/Cliente";
import Vendedor from "../src/model/Vendedor";
import Carro from "../src/model/Carro";
import { CorCarro, ModeloCarro } from "../src/model/CarroEnums";
import { FormaPagamento } from "../src/model/FormaPagamento";
import MyErro from "../src/error/MyErro";

jest.mock("../src/database/BancoVendasJson");

const mockSalvar = jest.fn();

beforeEach(() => {
  mockSalvar.mockClear();
  (BancoVendasJson as unknown as jest.Mock).mockImplementation(() => ({
    salvar: mockSalvar,
  }));
});

describe("VendaService", () => {
  test("deve processar venda corretamente", () => {
    const loja = new Loja("Loja A", "3333-3333", 10000, "Rua X");
    const service = new VendaService(loja);
    const cliente = new Cliente("João", "12345678900", 90000, 30, "99999-9999");
    const vendedor = new Vendedor("Maria", "09876543210", 0, 2000, 0.1);
    const carro = new Carro(ModeloCarro.COROLLA, CorCarro.PRETO);
    const data = new Date("2024-01-01T00:00:00.000Z");

    const venda = service.processarVenda(
      cliente,
      vendedor,
      carro,
      FormaPagamento.A_VISTA,
      data,
    );

    expect(venda.getValor()).toBe(carro.getValor());
    expect(venda.getComissao()).toBe(carro.getValor() * 0.1);
    expect(venda.getData()).toStrictEqual(data);
    expect(cliente.getSaldo()).toBe(90000 - carro.getValor());
    expect(loja.getSaldo()).toBe(10000 + carro.getValor());
    expect(vendedor.getVendas()).toBe(1);
    expect(mockSalvar).toHaveBeenCalledTimes(1);
  });

  test("deve lançar erro quando o saldo do cliente for insuficiente", () => {
    const loja = new Loja("Loja A", "3333-3333", 10000, "Rua X");
    const service = new VendaService(loja);
    const cliente = new Cliente("João", "12345678900", 1000, 30, "99999-9999");
    const vendedor = new Vendedor("Maria", "09876543210", 0, 2000, 0.1);
    const carro = new Carro(ModeloCarro.COROLLA, CorCarro.PRETO);

    expect(() =>
      service.processarVenda(cliente, vendedor, carro, FormaPagamento.A_VISTA),
    ).toThrow(MyErro);
    expect(mockSalvar).not.toHaveBeenCalled();
  });
});
