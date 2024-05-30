import { Personagem } from "./modules/personagem.js";
import { personagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";

const magoAntonio = new Mago("Antonio", 4, "fogo", 4, 3);
const magaJulia = new Mago("Julia", 8, "gelo", 7, 10);
const arqueiroFernando = new Arqueiro("Fernando", 10, 12);

const personagens = [magoAntonio, magaJulia, arqueiroFernando];

new personagemView(personagens).render();
