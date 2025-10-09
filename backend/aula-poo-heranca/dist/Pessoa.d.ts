declare class Pessoa {
    private nome;
    private cpf;
    private email;
    constructor(_nome: string, _cpf: number, _email: string);
    getNome(): string;
    setNome(nome: string): void;
    getCpf(): number;
    setCpf(cpf: number): void;
    getEmail(): string;
    setEmail(email: string): void;
    apresentar(): void;
}
export default Pessoa;
//# sourceMappingURL=Pessoa.d.ts.map