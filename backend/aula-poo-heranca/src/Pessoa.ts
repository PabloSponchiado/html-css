class Pessoa {
  private nome: string;
  private cpf: number;
  private email: string;

  constructor(_nome: string, _cpf: number, _email: string) {
    this.nome = _nome;
    this.cpf = _cpf;
    this.email = _email;
  }
  public getNome(): string {
    return this.nome;
  }
  public setNome(nome: string): void {
    this.nome = nome;
  }
  public getCpf(): number {
    return this.cpf;
  }
  public setCpf(cpf: number): void {
    this.cpf = cpf;
  }
  public getEmail(): string {
    return this.email;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
  public apresentar(): void {
    console.log(
      `Olá, meu nome é ${this.nome}, meu CPF é ${this.cpf} e meu email é ${this.email}.`
    );
  }
}
export default Pessoa;
