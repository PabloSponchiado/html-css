import Pessoa from "./Pessoa.js";
declare class Professor extends Pessoa {
    private numIdFuncionario;
    constructor(_nome: string, _cpf: number, _email: string, _numIdFuncionario: number);
    getNumIdFuncionario(): number;
    setNumIdFuncionario(numIdFuncionario: number): void;
    darAula(): void;
}
export default Professor;
//# sourceMappingURL=Professor.d.ts.map