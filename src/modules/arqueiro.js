import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    static tipo = "Arqueiro";
    static descricao = "Caçador furtivo que desfere ataques à distância com precisão mortal.";
    destreza;

    constructor(nome, destreza) {
        super(nome);
        this.destreza = destreza;
    }

    obterInsignia() {
        if (this.destreza >= 5) {
            return "Dominador de flechas";
        }
        return super.obterInsignia();
    }
}
