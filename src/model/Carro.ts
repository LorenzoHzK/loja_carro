import { CorCarro, ModeloCarro, MODELOS_CARRO } from "./CarroEnums";

export default class Carro {
  constructor(
    private modelo: ModeloCarro,
    private cor: CorCarro,
  ) {}

  getModelo(): ModeloCarro {
    return this.modelo;
  }

  getAno(): number {
    return MODELOS_CARRO[this.modelo].ano;
  }

  getValor(): number {
    return MODELOS_CARRO[this.modelo].valor;
  }

  getCor(): CorCarro {
    return this.cor;
  }
}
