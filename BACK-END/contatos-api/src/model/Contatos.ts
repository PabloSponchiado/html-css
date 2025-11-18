import type { ContatoDTO } from "../interface/ContatoDTO.js";
import { DatabaseModel } from "./DatabaseModel.js"; 

const database = new DatabaseModel().pool; 

class Contato {
  private id_contato: number = 0;
  private nome_completo: string;
  private data_nascimento: number;
  private email: string;
  private telefone: number;
  private observacoes: string;

  /**
   * Construtor da classe Contato
   * @param _nome_completo Nome do Contato
   * @param _observacoes CPF do Contato
   * @param _telefone Telefone do Contato
   * @param _data_nascimento Data de nascimento do Contato
   * @param _email Email do Contato
   * 
    */  
  constructor(_nome_completo: string, _observacoes: string, _telefone: number, _data_nascimento: number, _email: string) {
    this.nome_completo = _nome_completo;
    this.observacoes = _observacoes;
    this.telefone = _telefone;
    this.data_nascimento = _data_nascimento;
    this.email = _email;
  }

  /**
   * Retorna o ID do Contato
   * @returns ID do Contato
   */
  public getid_contato(): number {
    return this.id_contato;
  }

  /**
   * Atribui um ID ao Contato
   * @param id_contato novo ID
   */
  public setid_contato(id_contato: number): void {
    this.id_contato = id_contato;
  }

  /**
   * Retorna o nome do Contato
   * @returns Nome do Contato
   */
  public getNomCompleto(): string {
    return this.nome_completo;
  }

  /**
   * Atribui um nome ao Contato
   * @param nome_completo novo nome do Contato
   */
  public setnome_completo(nome_completo: string): void {
    this.nome_completo = nome_completo;
  }

  /**
   * Retorna o CPF do Contato
   * @returns CPF do Contato
   */
  public getObservacoes(): string {
    return this.observacoes;
  }

  /**
   * Atribui um CPF ao Contato
   * @param observacoes novo CPF do Contato
   */
  public setObservacoes(observacoes: string): void {
    this.observacoes = observacoes;
  }

  /**
   * Retorna o telefone do Contato
   * @returns Telefone do Contato
   */


  public getTelefone(): number {
    return this.telefone;
  }

  /**
   * Atribui um telefone ao Contato
   * @param telefone novo telefone do Contato
   */
  public setTelefone(telefone: number): void {
    this.telefone = telefone;
  }

  public getdata_nascimento(): number {
    return this.data_nascimento;
  }
    /**
   * Atribui um telefone ao Contato
   * @param data_nascimento novo telefone do Contato
   */
    public setdata_nascimento(data_nascimento: number): void {
    this.data_nascimento = data_nascimento;
  }
    public getEmail(): string {
    return this.email;
  }
      /**
   * Atribui um telefone ao Contato
   * @param email novo telefone do Contato
   */
    public setEmail(email: string): void {
    this.email = email;
  }


  /**
   * Retorna os Contatos cadastrados no banco de dados
   * @returns Lista com Contatos cadastrados
   * @returns valor nulo em caso de erro na consulta
   */
  static async listarContatos(): Promise<Array<Contato> | null> {
    try {
      let listaDeContatos: Array<Contato> = [];

      const querySelectContatos = `SELECT * FROM Contatos;`;

      const respostaBD = await database.query(querySelectContatos);

      respostaBD.rows.forEach((ContatoBD) => {
        const listandoContato: Contato = new Contato(
          ContatoBD.nome_completo,
          ContatoBD.observacoes,
          ContatoBD.telefone,
          ContatoBD.data_nascimento,
          ContatoBD.email
        );

        listandoContato.setid_contato(ContatoBD.id_contato);

        listaDeContatos.push(listandoContato);
      });

      return listaDeContatos;
    } catch (error) {
      console.error(`Erro na consulta ao banco de dados. ${error}`);

      return null;
    }
  }
  
  static async listarContatoID(id_contato: number): Promise<Contato | null> {
        try {
            const querySelectContato = `SELECT * FROM Contatos WHERE id_contato=$1;`;

            const respostaBD = await database.query(querySelectContato, [id_contato]);

            if(respostaBD.rowCount != 0) {
                const contatoEncontrado: Contato = new Contato(
                    respostaBD.rows[0].nome_completo,
                    respostaBD.rows[0].observacoes,
                    respostaBD.rows[0].telefone,
                    respostaBD.rows[0].data_nascimento,
                    respostaBD.rows[0].email
                );

                contatoEncontrado.setid_contato(respostaBD.rows[0].id_contato);

                return contatoEncontrado;
            }

            return null;
        } catch (error) {
            console.error(`Erro ao buscar Contato no banco de dados. ${error}`);

            return null;
        }
    }

  static async cadastrarContato(Contato: Contato): Promise<Boolean> {
    try {
      const queryInsertContato = `INSERT INTO Contatos (nome_completo, data_nascimento, email, telefone, observacoes) 
                                    VALUES 
                                    ($1, $2, $3, $4, $5)
                                    RETURNING id_contato;`;
      const respostaBD = await database.query(queryInsertContato, [
        Contato.nome_completo.toUpperCase(),
        Contato.email,
        Contato.telefone,
        Contato.observacoes,
      ]);

      if (respostaBD.rows.length > 0) {
        console.info(
          `Contato cadastrado com sucesso! ID: ${respostaBD.rows[0].id_contato}`
        );
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Erro na consulta ao banco de dados. ${error}`);
      return false;
    }
  }
}
export default Contato;
