# myacademic-front
Repositório destinado para a implementação do front-end de um sistema WEB que irá realizar a gestão de atividades para docente/pesquisador.

## Tecnologias
- vue.js 2.6.10
- vuex

[Live do protótipo](https://xd.adobe.com/view/e7428e5e-1892-45eb-4783-34d65ee3c041-9173/?fullscreen) (_Adobe XD_)

## Componentização

```sh
src/
 |-- pages/ 
 |   |-- login/
 |   |   |-- Login.vue (login chama o contato.vue pelas rotas)
 |   |
 |   |-- contato/
 |   |   |-- Contato.vue
 |   |
 |   |-- commom/
 |   |   |-- Nav.vue
 |   |   |-- Footer.vue
 |   |
 |   |-- home/
 |   |   |-- HomeAdmin.vue (home com os botoes de alterações do admin, irá importar alguns componentes)
 |   |   |-- HomeUser.vue (home apenas visualição, irá importar alguns componentes)
 |   |
 |-- components/ 
 |   |-- alunos/
 |   |   |-- Alunos.vue (Lista os alunos, e chama os componentes AlunoUpdate e AlunoAdd)
 |   |   |-- AlunosUpdate.vue
 |   |   |-- AlunosAdd.vue
 |   |
 |   |-- disciplinas/
 |   |   |-- Disciplinas.vue (Lista as disciplinas, e chama os componentes DisciplinaUpdate e DisciplinaAdd)
 |   |   |-- DisciplinaUpdate.vue
 |   |   |-- DisciplinaAdd.vue
 |   |
 |   |-- grupoDePesquisa/
 |   |   |-- GruposPesquisas.vue 
 |   |   |-- GrupoPequisaUpdate.vue
 |   |   |-- GrupoPesquisaAdd.vue
 |   |   
 |   |-- projetos/
 |   |   |-- Projetos.vue 
 |   |   |-- ProjetoUpdate.vue
 |   |   |-- ProjetoAdd.vue
 |   |   
 |   |-- publicacoes/
 |   |   |-- Publicacoes.vue 
 |   |   |-- PublicacoesUpdate.vue
 |   |   |-- PublicacoesAdd.vue
 |   |   
 |   |-- configuracoes/
 |   |   |-- Configuracoes.vue
 |   |   

```
