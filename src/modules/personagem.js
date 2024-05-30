export class Personagem {
    constructor(nome, level, tipo) {
        this.nome = nome;
        this.vida = 100;
        this.mana = 100;
        this.level = level;
        this.tipo = tipo;
        this.descricao = undefined;
    }

    obterInsignia() {
        if (this.level >= 5) {
            return "Implacavel ${this.tipo}";
        }
        return "${this.tipo} iniciante";
    }
}
