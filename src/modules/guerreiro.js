import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
    static tipo = "Guerreiro";
    static descricao =
        "O Espadachim Negro, é um guerreiro implacável consumido pela fúria e pela sede de vingança.";
    forca;

    constructor(nome, forca) {
        super(nome);
        this.forca = forca;
    }

    obterInsignia() {
        if (this.level >= 7 && this.forca >= 5) {
            return "Guerreiro Berserker";
        }
        return super.obterInsignia();
    }
}
