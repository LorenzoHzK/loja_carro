import Cliente from "../src/model/Cliente";
import MyErro from "../src/error/MyErro";

describe("Cliente", () => {
  test("deve debitar o saldo do cliente", () => {
    const cliente = new Cliente("João", "11122233344", 1000, 30, "99999-9999");

    cliente.debitarSaldo(500);

    expect(cliente.getSaldo()).toBe(500);
  });

  test("deve lançar erro quando o saldo for insuficiente", () => {
    const cliente = new Cliente("João", "11122233344", 1000, 30, "99999-9999");

    expect(() => cliente.debitarSaldo(1500)).toThrow(MyErro);
    expect(() => cliente.debitarSaldo(1500)).toThrow(/Saldo insuficiente/);
  });
});
