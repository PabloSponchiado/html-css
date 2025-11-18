import { Router } from "express"; 
import type { Request, Response } from "express"; 
import ContatoController from "./controller/ContatoController.js";
const router = Router(); 

router.get("/api", (req: Request, res: Response) => {
    res.status(200).json({ mensagem: "Olá, seja bem-vindo!" });
});

router.get("/api/contatos", ContatoController.listarContatos);

router.post("/api/contatos", ContatoController.novo);

router.get("/api/contatos/:idContato", ContatoController.listarContatoID);





export { router }; // Exporta o roteador