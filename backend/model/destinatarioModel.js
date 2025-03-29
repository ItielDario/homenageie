import Database from "../utils/database.js";

const db = new Database();

export default class DestinatarioModel {
    #desId;
    #desNome;

    get desId() { return this.#desId; }
    set desId(desId) { this.#desId = desId; }

    get desNome() { return this.#desNome; }
    set desNome(desNome) { this.#desNome = desNome; }

    constructor(desId, desNome) {
        this.#desId = desId;
        this.#desNome = desNome;
    }

    async gravar() {
        const sql = `INSERT INTO Destinatario (desNome) VALUES (?);`;
        const valores = [this.#desNome];

        const result = await db.ExecutaComandoNonQuery(sql, valores);
        return result;
    }
}
