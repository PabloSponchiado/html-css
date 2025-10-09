import Pessoa from "./Pessoa.js";
declare class Aluno extends Pessoa {
    private matricula;
    constructor(_nome: string, _cpf: number, _email: string, _matricula: number);
    getMatricula(): number;
    setMatricula(matricula: number): void;
    estudar(): void;
}
export default Aluno;
//# sourceMappingURL=Aluno.d.ts.map