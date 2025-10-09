import Pessoa from "./Pessoa.js";
class Aluno extends Pessoa {
    matricula;
    constructor(_nome, _cpf, _email, _matricula) {
        super(_nome, _cpf, _email);
        this.matricula = _matricula;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    estudar() {
        console.log(`O aluno ${this.getNome()} está estudando.`);
    }
}
export default Aluno;
//# sourceMappingURL=Aluno.js.map