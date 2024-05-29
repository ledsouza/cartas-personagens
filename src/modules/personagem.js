export class Personagem {
    constructor(nome, vida, mana, level, tipo, descricao = undefined) {
        this.nome = nome;
        this.vida = vida;
        this.mana = mana;
        this.level = level;
        this.tipo = tipo;
        this.descricao = descricao;
    }

    obterInsignia() {
        if (this.level >= 5) {
            return "Implacavel ${this.tipo}";
        }
        return "${this.tipo} iniciante";
    }
}
