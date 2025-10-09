import Pessoa from "./Pessoa.js";

class Aluno extends Pessoa {
  private matricula: number;

  constructor(_nome: string, _cpf: number, _email: string, _matricula: number) {
    super(_nome, _cpf, _email);
    this.matricula = _matricula;
  }
  public getMatricula(): number {
    return this.matricula;
  }
  public setMatricula(matricula: number): void {
    this.matricula = matricula;
  }
  public estudar(): void {
    console.log(`O aluno ${this.getNome()} está estudando.`);
  }
}
export default Aluno;
