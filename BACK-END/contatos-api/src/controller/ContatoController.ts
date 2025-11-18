import type { ContatoDTO } from "../interface/ContatoDTO.js";
import Contato from "../model/Contatos.js";
import type { Request, Response } from "express";

class ContatoController {

    /**
     * Faz a chamada ao modelo para obter a lista de Contatos e devolve ao Contato
     * 
     * @param req Requisição do Contato
     * @param res Resposta do servidor
     * @returns (200) Lista de todos os Contatos
     * @returns (500) Erro na consulta
     */
    static async listarContatoID(req: Request, res: Response): Promise<Response> {
        try {
            const idContatoParam = req.params.idContato as string | undefined;
            if (!idContatoParam) {
                return res.status(400).json({ mensagem: "ID do contato não fornecido." });
            }

            const id_contato: number = parseInt(idContatoParam);

            if (isNaN(id_contato) || id_contato <= 0) {
                return res.status(400).json({ mensagem: "ID inválido." });
            }

            const respostaModelo = await Contato.listarContatoID(id_contato);

            if (respostaModelo === null) {
                return res.status(200).json({ mensagem: "Nenhum Contato encontrado com o id_contato fornecido." });
            }

            return res.status(200).json(respostaModelo);
        } catch (error) {
            console.error(`Erro ao acesso o modelo. ${error}`);

            return res.status(500).json({ mensagem: "Não foi possível recuperar o Contato." });
        }
    }        
    static async listarContatos(req: Request, res: Response): Promise<Response> {
        try {
            const contatos: Array<Contato> | null = await Contato.listarContatos();

            return res.status(200).json(contatos);
        } catch (error) {
            console.error(`Erro ao consultar modelo. ${error}`);

            return res.status(500).json({ mensagem: "Não foi possivel acessar a lista de Contatos." });
        }
    }
        static async novo(req: Request, res: Response): Promise<Response> {
        try {
            const dadosRecebidosContato = req.body;

            const respostaModelo = await Contato.cadastrarContato(dadosRecebidosContato);

            if (respostaModelo) {
                return res.status(201).json({ mensagem: "Contato cadastrado com sucesso." });
            } else {
                return res.status(400).json({ mensagem: "Erro ao cadastrar Contato." });
            }
        } catch (error) {
            console.error(`Erro no modelo. ${error}`);

            return res.status(500).json({ mensagem: "Não foi possível inserir o Contato" });
        }
    }
}



export default ContatoController;