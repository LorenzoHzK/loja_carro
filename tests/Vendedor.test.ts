import { describe, expect, test } from "@jest/globals";
import Vendedor from "../src/model/Vendedor";
import MyErro from "../src/error/MyErro";

describe("Vendedor", () => {
  test("deve calcular a comissão do vendedor", () => {
    const vendedor = new Vendedor("Maria", "12345678900", 0, 2000, 0.1);

    const comissao = vendedor.calcularComissao(80000);

    expect(comissao).toBe(8000);
  });

  test("deve lançar erro quando o percentual de comissão for inválido", () => {
    const vendedor = new Vendedor("Maria", "12345678900", 0, 2000, 1.5);

    expect(() => vendedor.calcularComissao(80000)).toThrow(MyErro);
    expect(() => vendedor.calcularComissao(80000)).toThrow(
      "Não foi possível calcular a comissão do vendedor.",
    );
  });
});
