import Loja from "../src/model/Loja";

describe("Loja", () => {
  test("deve registrar receita e aumentar o saldo da loja", () => {
    const loja = new Loja("Loja A", "3333-3333", 10000, "Rua Principal, 1");

    loja.registrarReceita(2500);

    expect(loja.getSaldo()).toBe(12500);
  });
});
