import { Personagem } from "./modules/personagem.js";
import { personagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago("Antonio", "fogo", 4, 3);
const magaJulia = new Mago("Julia", "gelo", 7, 10);
const arqueiroFernando = new Arqueiro("Fernando", 12);
const arqueiroMagoChico = new ArqueiroMago("Chico", 10, "ar", 4, 8);
const guerreiroGuts = new Guerreiro("Guts", 10);

const personagens = [magoAntonio, magaJulia, arqueiroFernando, arqueiroMagoChico, guerreiroGuts];

new personagemView(personagens).render();
