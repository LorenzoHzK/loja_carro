import { afterAll, beforeEach, describe, expect, test } from "@jest/globals";
import fs from "fs";
import os from "os";
import path from "path";
import BancoJson from "../src/database/BancoJson";

type Item = { value: string };

class TestBancoJson extends BancoJson<Item> {
  public adicionarItem(item: Item): void {
    this.adicionar(item);
  }

  public carregarItens(): Item[] {
    return this.carregarLista();
  }
}

describe("BancoJson", () => {
  const tempDir = path.join(os.tmpdir(), "sistemapoo-bancojson-tests");
  const arquivo = path.join(tempDir, "bancojson.test.json");

  beforeEach(() => {
    if (fs.existsSync(arquivo)) {
      fs.unlinkSync(arquivo);
    }
  });

  afterAll(() => {
    if (fs.existsSync(arquivo)) {
      fs.unlinkSync(arquivo);
    }
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  test("deve retornar lista vazia quando o arquivo não existe", () => {
    const banco = new TestBancoJson(arquivo);

    expect(banco.carregarItens()).toEqual([]);
  });

  test("deve salvar e carregar itens corretamente", () => {
    const banco = new TestBancoJson(arquivo);

    banco.adicionarItem({ value: "teste" });

    expect(fs.existsSync(arquivo)).toBe(true);
    expect(banco.carregarItens()).toEqual([{ value: "teste" }]);
  });
});
