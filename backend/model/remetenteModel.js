import Database from "../utils/database.js";

const db = new Database();

export default class RemetenteModel {
    #remId;
    #remEmail;
    #remPlano;
    #remMensagem;
    #remMusica;
    #desId;

    get remId() { return this.#remId; }
    set remId(remId) { this.#remId = remId; }

    get remEmail() { return this.#remEmail; }
    set remEmail(remEmail) { this.#remEmail = remEmail; }

    get remPlano() { return this.#remPlano; }
    set remPlano(remPlano) { this.#remPlano = remPlano; }

    get remMensagem() { return this.#remMensagem; }
    set remMensagem(remMensagem) { this.#remMensagem = remMensagem; }

    get remMusica() { return this.#remMusica; }
    set remMusica(remMusica) { this.#remMusica = remMusica; }

    get desId() { return this.#desId; }
    set desId(desId) { this.#desId = desId; }

    constructor(remId, remEmail, remPlano, remMensagem, remMusica, desId) {
        this.#remId = remId;
        this.#remEmail = remEmail;
        this.#remPlano = remPlano;
        this.#remMensagem = remMensagem;
        this.#remMusica = remMusica;
        this.#desId = desId;
    }

    async gravar() {
        const sql = `INSERT INTO Remetente (remEmail, remPlano, remMensagem, remMusica, desId) VALUES (?, ?, ?, ?, ?);`;
        const valores = [ this.#remEmail, this.#remPlano, this.#remMensagem, this.#remMusica, this.#desId ];

        const result = await db.ExecutaComandoNonQuery(sql, valores);
        return result;
    }
}
