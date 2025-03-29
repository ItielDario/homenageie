import Database from "../utils/database.js";

const db = new Database();

export default class ImagemModel {
    #imgId;
    #imgNome;
    #remId;
    #desId;

    get imgId() { return this.#imgId; }
    set imgId(imgId) { this.#imgId = imgId; }

    get imgNome() { return this.#imgNome; }
    set imgNome(imgNome) { this.#imgNome = imgNome; }

    get remId() { return this.#remId; }
    set remId(remId) { this.#remId = remId; }

    get desId() { return this.#desId; }
    set desId(desId) { this.#desId = desId; }

    constructor(imgId, imgNome, remId, desId) {
        this.#imgId = imgId;
        this.#imgNome = imgNome;
        this.#remId = remId;
        this.#desId = desId;
    }

    async gravar() {
        const sql = `INSERT INTO Imagem (imgNome, remId, desId) VALUES (?, ?, ?);`;
        const valores = [this.#imgNome, this.#remId, this.#desId];

        const result = await db.ExecutaComandoNonQuery(sql, valores);
        return result;
    }
}
