import DestinatarioModel from "../model/destinatarioModel.js";
import RemetenteModel from "../model/remetenteModel.js";
import ImagemModel from "../model/imagemModel.js";

export default class dadosController {

    async regisrarDados(req, res) {
        try {
            let destinatario = new DestinatarioModel(0, "Alessandra Cardoso Dario");
            let resultDestinatario = await destinatario.gravar();
            console.log("Destinatario: " + resultDestinatario);
            
            let remetente = new RemetenteModel(0, "itiel.dario@gmail.com", 2, "Você é especial para mim", "Pascoa_do_Senhor", 1);
            let resultRemetente = await remetente.gravar();
            console.log("Remetente: " + resultRemetente);

            let imagem = new ImagemModel(0, "foto", 1, 1);
            let resultImagem = await imagem.gravar();
            console.log("Imagem: " + resultImagem);
        } 
        catch (error) {
            res.status(500).json(error);
        }
    }
}