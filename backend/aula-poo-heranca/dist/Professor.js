import Pessoa from "./Pessoa.js";
class Professor extends Pessoa {
    numIdFuncionario;
    constructor(_nome, _cpf, _email, _numIdFuncionario) {
        super(_nome, _cpf, _email);
        this.numIdFuncionario = _numIdFuncionario;
    }
    getNumIdFuncionario() {
        return this.numIdFuncionario;
    }
    setNumIdFuncionario(numIdFuncionario) {
        this.numIdFuncionario = numIdFuncionario;
    }
    darAula() {
        console.log(`O professor ${this.getNome()} está dando aula.`);
    }
}
export default Professor;
//# sourceMappingURL=Professor.js.map