import readline from "readline";
import { ModeloCarro, CorCarro, MODELOS_CARRO } from "../model/CarroEnums";
import { FormaPagamento } from "../model/FormaPagamento";

export default class ConsoleInput {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  private perguntar(pergunta: string): Promise<string> {
    return new Promise((resolve) => this.rl.question(pergunta, resolve));
  }

  async pedirTexto(pergunta: string): Promise<string> {
    while (true) {
      const resposta = (await this.perguntar(pergunta)).trim();
      if (resposta.length > 0) {
        return resposta;
      }
      console.log("Entrada inválida. Informe um valor não vazio.");
    }
  }

  async pedirNumero(pergunta: string): Promise<number> {
    while (true) {
      const resposta = (await this.perguntar(pergunta))
        .replace(",", ".")
        .trim();
      const valor = Number(resposta);

      if (Number.isFinite(valor) && valor > 0) {
        return valor;
      }
      console.log("Entrada inválida. Informe um número maior que zero.");
    }
  }

  async pedirInteiro(pergunta: string): Promise<number> {
    while (true) {
      const resposta = (await this.perguntar(pergunta)).trim();
      const valor = Number(resposta);

      if (Number.isInteger(valor) && valor > 0) {
        return valor;
      }
      console.log(
        "Entrada inválida. Informe um número inteiro maior que zero.",
      );
    }
  }

  async escolherModeloCarro(): Promise<ModeloCarro> {
    const modelos = Object.values(ModeloCarro) as ModeloCarro[];

    console.log("\n=== Escolha o modelo do carro ===");
    modelos.forEach((modelo, index) => {
      const info = MODELOS_CARRO[modelo];
      console.log(
        `${index + 1}) ${modelo} - Ano: ${info.ano}, Valor: R$ ${info.valor.toFixed(2)}`,
      );
    });

    while (true) {
      const resposta = await this.perguntar("Digite o número do modelo: ");
      const indice = Number(resposta);

      if (Number.isInteger(indice) && indice >= 1 && indice <= modelos.length) {
        return modelos[indice - 1];
      }

      console.log("Opção inválida. Tente novamente.");
    }
  }

  async escolherCorCarro(): Promise<CorCarro> {
    const cores = Object.values(CorCarro) as CorCarro[];

    console.log("\n=== Escolha a cor do carro ===");
    cores.forEach((cor, index) => {
      console.log(`${index + 1}) ${cor}`);
    });

    while (true) {
      const resposta = await this.perguntar("Digite o número da cor: ");
      const indice = Number(resposta);

      if (Number.isInteger(indice) && indice >= 1 && indice <= cores.length) {
        return cores[indice - 1];
      }

      console.log("Opção inválida. Tente novamente.");
    }
  }

  async escolherFormaPagamento(): Promise<FormaPagamento> {
    const formas = Object.values(FormaPagamento);

    console.log("\n=== Escolha a forma de pagamento ===");
    formas.forEach((forma, index) => {
      console.log(`${index + 1}) ${forma}`);
    });

    while (true) {
      const resposta = await this.perguntar(
        "Digite o número da forma de pagamento: ",
      );
      const indice = Number(resposta);

      if (Number.isInteger(indice) && indice >= 1 && indice <= formas.length) {
        return formas[indice - 1];
      }

      console.log("Opção inválida. Tente novamente.");
    }
  }

  async pedirOpcao(min: number, max: number): Promise<number> {
    while (true) {
      const resposta = await this.perguntar(
        `Digite uma opção entre ${min} e ${max}: `,
      );
      const valor = Number(resposta);

      if (Number.isInteger(valor) && valor >= min && valor <= max) {
        return valor;
      }

      console.log(`Opção inválida. Digite um número entre ${min} e ${max}.`);
    }
  }

  fechar(): void {
    this.rl.close();
  }
}
