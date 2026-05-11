export enum ModeloCarro {
  COROLLA = "Corolla",
  GOLF = "Golf",
  PALIO = "Palio",
  CIVIC = "Civic",
}

export enum CorCarro {
  PRATA = "Prata",
  PRETO = "Preto",
  BRANCO = "Branco",
  VERMELHO = "Vermelho",
  AZUL = "Azul",
}

export type ModeloCarroInfo = {
  ano: number;
  valor: number;
};

export const MODELOS_CARRO: Record<ModeloCarro, ModeloCarroInfo> = {
  [ModeloCarro.COROLLA]: { ano: 2020, valor: 80000 },
  [ModeloCarro.GOLF]: { ano: 2021, valor: 90000 },
  [ModeloCarro.PALIO]: { ano: 2018, valor: 45000 },
  [ModeloCarro.CIVIC]: { ano: 2022, valor: 110000 },
};
