import fs from "fs";
import path from "path";

export default abstract class BancoJson<T> {
  constructor(protected readonly caminhoArquivo: string) {}

  protected salvarLista(dados: T[]): void {
    fs.mkdirSync(path.dirname(this.caminhoArquivo), { recursive: true });
    fs.writeFileSync(
      this.caminhoArquivo,
      JSON.stringify(dados, null, 2),
      "utf-8",
    );
  }

  protected carregarLista(): T[] {
    if (!fs.existsSync(this.caminhoArquivo)) {
      return [];
    }

    const conteudo = fs.readFileSync(this.caminhoArquivo, "utf-8");

    if (!conteudo.trim()) {
      return [];
    }

    return JSON.parse(conteudo) as T[];
  }

  protected adicionar(item: T): void {
    const dados = this.carregarLista();
    dados.push(item);
    this.salvarLista(dados);
  }
}
