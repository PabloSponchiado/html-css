import Pessoa from "./Pessoa.js";

class Professor extends Pessoa {
  private numIdFuncionario: number;

  constructor(_nome: string, _cpf: number, _email: string, _numIdFuncionario: number) {
    super(_nome, _cpf, _email);
    this.numIdFuncionario = _numIdFuncionario;
  }
  public getNumIdFuncionario(): number {
    return this.numIdFuncionario;
  }
  public setNumIdFuncionario(numIdFuncionario: number): void {
    this.numIdFuncionario = numIdFuncionario;
  }
  public darAula(): void {
    console.log(`O professor ${this.getNome()} está dando aula.`);
  }
}

export default Professor;
