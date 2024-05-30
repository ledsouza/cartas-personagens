## Devs & Dragons 🃏🐉
![Static Badge](https://img.shields.io/badge/Status-Finalizado-green)

### Descrição

**Devs & Dragons** é um jogo de cartas inspirado em RPGs de fantasia medieval. O projeto foi desenvolvido durante um curso da Alura com o objetivo de aplicar conceitos avançados de desenvolvimento web, incluindo HTML, CSS, JavaScript, Orientação a Objetos e o padrão MVVM.

<img width="1222" alt="image" src="https://github.com/ledsouza/cartas-personagens/assets/56280624/e07a38df-6aa6-445f-9b97-b89e26687706">

### Tecnologias Utilizadas

- HTML: Estrutura e conteúdo do jogo.
- CSS: Estilização e design visual.
- JavaScript: Lógica do jogo, interações e animações.

### Descrição Detalhada

Este projeto simula um combate entre dois personagens, cada personagem com habilidades únicas. O jogo implementa um sistema de classes de personagens utilizando Orientação a Objetos em JavaScript, onde:

- **Personagem:** Classe base que define as propriedades e métodos comuns a todos os personagens (ex: nome, vida, mana).
- **Mago, Arqueiro, Guerreiro, ArqueiroMago:** Classes filhas que herdam da classe `Personagem`, cada uma com habilidades especiais que as diferenciam.

A estrutura do projeto segue o padrão MVVM (Model-View-ViewModel) para organizar o código e facilitar a manutenção:

- **`/src/assets/`:** Contém imagens, arquivos de estilo e outros recursos visuais do jogo.
- **`/src/components/`:** Abriga os componentes da interface do usuário (UI), como as cartas de personagem, botões e elementos interativos.
- **`/src/modules/`:** Contém a lógica do jogo, dividida em módulos para melhor organização. Isso inclui a implementação das classes de personagem, regras do jogo e gerenciamento do estado do jogo.

**Funcionalidades Principais:**

- Escolha de personagens com diferentes classes e habilidades.
- Sistema de combate entre personagens.
- Interface gráfica intuitiva para visualização das cartas e informações do personagens.
