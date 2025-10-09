class Pessoa {
    nome;
    cpf;
    email;
    constructor(_nome, _cpf, _email) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.email = _email;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, meu CPF é ${this.cpf} e meu email é ${this.email}.`);
    }
}
export default Pessoa;
//# sourceMappingURL=Pessoa.js.map