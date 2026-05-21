function abrirPagina(id){

    document.querySelectorAll(".pagina").forEach(p=>{
        p.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
}

function criarQuiz(containerId, scoreId, questoes){

    const container = document.getElementById(containerId);

    let score = 0;
    const valorQuestao = 156.25;

    questoes.forEach((q, index)=>{

        const div = document.createElement("div");
        div.className = "questao";

        div.innerHTML = `
            <h3>${index+1}. ${q.pergunta}</h3>
        `;

        q.opcoes.forEach(op=>{

            const btn = document.createElement("button");

            btn.className = "opcao";
            btn.innerText = op;

            btn.onclick = ()=>{

                const botoes = div.querySelectorAll("button");

                botoes.forEach(b=>{
                    b.disabled = true;

                    if(b.innerText === q.resposta){
                        b.classList.add("correta");
                    }
                });

                if(op === q.resposta){

                    btn.classList.add("correta");

                    score += valorQuestao;

                }else{

                    btn.classList.add("errada");
                }

                document.getElementById(scoreId).innerText =
                    Math.round(score);

                const fb = document.createElement("div");

                fb.className = "feedback";

                fb.innerHTML = `
                    <strong>Resposta Correta:</strong>
                    ${q.resposta}
                    <br><br>
                    <strong>Explicação:</strong>
                    ${q.explicacao}
                `;

                div.appendChild(fb);
            }

            div.appendChild(btn);

        });

        container.appendChild(div);

    });

}






/* =========================
   SIMULADO 1
========================= */

const simulado1 = [

{
pergunta:"Qual a principal finalidade da UML?",
opcoes:[
"Visualizar e documentar sistemas",
"Criar banco automaticamente",
"Substituir programação",
"Gerenciar servidores"
],
resposta:"Visualizar e documentar sistemas",
explicacao:"A UML é uma linguagem gráfica usada para especificar, visualizar e documentar sistemas."
},

{
pergunta:"O que ocorre primeiro na abordagem Bottom-Up?",
opcoes:[
"Identificação dos atributos",
"Criação do SGBD",
"Modelagem física",
"Criação das telas"
],
resposta:"Identificação dos atributos",
explicacao:"Bottom-Up começa pelos elementos menores, como atributos."
},

{
pergunta:"Qual forma normal elimina dependência parcial?",
opcoes:[
"2FN",
"1FN",
"3FN",
"4FN"
],
resposta:"2FN",
explicacao:"A 2FN remove dependências parciais em PK composta."
},

{
pergunta:"Exemplo de atributo multivalorado?",
opcoes:[
"Telefone",
"CPF",
"Código",
"Idade"
],
resposta:"Telefone",
explicacao:"Um cliente pode possuir vários telefones."
},

{
pergunta:"O que a 3FN elimina?",
opcoes:[
"Dependência transitiva",
"Chave primária",
"Relacionamentos",
"Agregações"
],
resposta:"Dependência transitiva",
explicacao:"A 3FN remove dependências entre atributos não-chave."
},

{
pergunta:"Como resolver relacionamento N:N?",
opcoes:[
"Tabela associativa",
"Excluir FK",
"Duplicar tabela",
"Criar índice"
],
resposta:"Tabela associativa",
explicacao:"Relacionamentos N:N precisam de uma tabela intermediária."
},

{
pergunta:"UML é uma linguagem...",
opcoes:[
"Gráfica de modelagem",
"De programação",
"De banco físico",
"Compilada"
],
resposta:"Gráfica de modelagem",
explicacao:"A UML é uma linguagem visual de modelagem."
},

{
pergunta:"Qual diagrama mostra interação usuário-sistema?",
opcoes:[
"Casos de Uso",
"Sequência",
"Classes",
"Estados"
],
resposta:"Casos de Uso",
explicacao:"Casos de Uso mostram atores e funcionalidades."
},

{
pergunta:"Exemplo de atributo derivado?",
opcoes:[
"Idade",
"Nome",
"CPF",
"Matrícula"
],
resposta:"Idade",
explicacao:"Idade pode ser calculada pela data de nascimento."
},

{
pergunta:"No relacionamento 1:N a FK fica onde?",
opcoes:[
"No lado N",
"No lado 1",
"Nas duas tabelas",
"Não existe FK"
],
resposta:"No lado N",
explicacao:"A chave estrangeira vai para a tabela do lado N."
},

{
pergunta:"O que a 4FN elimina?",
opcoes:[
"Dependências multivaloradas",
"Campos compostos",
"PK",
"Campos derivados"
],
resposta:"Dependências multivaloradas",
explicacao:"A 4FN evita redundâncias combinatórias."
},

{
pergunta:"Exemplo de atributo composto?",
opcoes:[
"Endereço",
"CPF",
"Telefone",
"Idade"
],
resposta:"Endereço",
explicacao:"Endereço pode ser dividido em rua, número e bairro."
},

{
pergunta:"O que é PK?",
opcoes:[
"Identificador único",
"Campo calculado",
"Campo repetido",
"Relacionamento"
],
resposta:"Identificador único",
explicacao:"A PK identifica exclusivamente cada registro."
},

{
pergunta:"Diferença da FK?",
opcoes:[
"Cria relacionamento entre tabelas",
"Calcula valores",
"Elimina redundância",
"Substitui PK"
],
resposta:"Cria relacionamento entre tabelas",
explicacao:"A FK referencia outra tabela."
},

{
pergunta:"Função do dicionário de dados?",
opcoes:[
"Documentar tabelas",
"Executar SQL",
"Criar servidores",
"Compilar sistema"
],
resposta:"Documentar tabelas",
explicacao:"O dicionário documenta tabelas, campos e permissões."
},

{
pergunta:"O que é Projeto Conceitual?",
opcoes:[
"Modelo abstrato independente de tecnologia",
"Banco pronto",
"Modelo físico",
"Código SQL"
],
resposta:"Modelo abstrato independente de tecnologia",
explicacao:"O modelo conceitual representa regras do negócio."
}

];






/* =========================
   SIMULADO 2
========================= */

const simulado2 = [

{
pergunta:"Qual diagrama mostra ordem temporal das mensagens?",
opcoes:[
"Sequência",
"Classes",
"Atividades",
"Estado"
],
resposta:"Sequência",
explicacao:"O diagrama de sequência mostra troca de mensagens no tempo."
},

{
pergunta:"Em qual fase escolhemos o SGBD?",
opcoes:[
"Projeto do banco",
"Operação",
"Teste",
"Estudo inicial"
],
resposta:"Projeto do banco",
explicacao:"A escolha do SGBD ocorre na fase de projeto."
},

{
pergunta:"Linha tracejada com seta representa?",
opcoes:[
"Dependência",
"Associação",
"Agregação",
"Composição"
],
resposta:"Dependência",
explicacao:"Mudança em um elemento afeta outro."
},

{
pergunta:"Estratégia ideal para sistemas corporativos?",
opcoes:[
"Top-Down",
"Bottom-Up",
"Manual",
"Linear"
],
resposta:"Top-Down",
explicacao:"Top-Down facilita visão macro do sistema."
},

{
pergunta:"Qual diagrama mostra módulos e bibliotecas?",
opcoes:[
"Componentes",
"Classes",
"Estados",
"Casos de Uso"
],
resposta:"Componentes",
explicacao:"Diagramas de componentes representam módulos."
},

{
pergunta:"Fase após testes?",
opcoes:[
"Operação",
"Projeto",
"Levantamento",
"Modelagem"
],
resposta:"Operação",
explicacao:"Após testes o sistema entra em produção."
},

{
pergunta:"Losango vazado representa?",
opcoes:[
"Agregação",
"Dependência",
"Herança",
"Associação"
],
resposta:"Agregação",
explicacao:"Agregação representa relação todo-parte."
},

{
pergunta:"Onde ocorre conversão de dados antigos?",
opcoes:[
"Implementação e carga",
"Operação",
"Modelagem lógica",
"Estudo inicial"
],
resposta:"Implementação e carga",
explicacao:"Nesta fase ocorre migração de dados."
},

{
pergunta:"Qual diagrama mostra servidores físicos?",
opcoes:[
"Implantação",
"Sequência",
"Estado",
"Atividade"
],
resposta:"Implantação",
explicacao:"Mostra hardware, redes e componentes."
},

{
pergunta:"O que são metadados?",
opcoes:[
"Dados sobre dados",
"Backup",
"Campos derivados",
"Tipos de usuários"
],
resposta:"Dados sobre dados",
explicacao:"Metadados descrevem os dados do sistema."
},

{
pergunta:"Mudança no elemento independente afeta outro. Nome?",
opcoes:[
"Dependência",
"Agregação",
"Associação",
"Composição"
],
resposta:"Dependência",
explicacao:"Característica do relacionamento dependência."
},

{
pergunta:"Qual diagrama lembra fluxograma?",
opcoes:[
"Atividades",
"Estados",
"Classes",
"Componentes"
],
resposta:"Atividades",
explicacao:"Representa fluxo do processo."
},

{
pergunta:"Quem define escopo e fronteiras?",
opcoes:[
"Estudo Inicial",
"Operação",
"Teste",
"Implantação"
],
resposta:"Estudo Inicial",
explicacao:"Define requisitos e limites do sistema."
},

{
pergunta:"Qual diagrama mostra estados do objeto?",
opcoes:[
"Estados",
"Classes",
"Atividades",
"Sequência"
],
resposta:"Estados",
explicacao:"Mostra transições e estados."
},

{
pergunta:"Diagrama central da estrutura estática?",
opcoes:[
"Classes",
"Implantação",
"Sequência",
"Casos de Uso"
],
resposta:"Classes",
explicacao:"Representa atributos, métodos e relacionamentos."
},

{
pergunta:"Middle-Up-Down é...",
opcoes:[
"Técnica mista",
"Linguagem de programação",
"Banco físico",
"SGBD"
],
resposta:"Técnica mista",
explicacao:"Mistura Top-Down e Bottom-Up."
}

];






/* =========================
   SIMULADO 3
========================= */

const simulado3 = [

{
pergunta:"O que é atributo atômico?",
opcoes:[
"Dado indivisível",
"Campo calculado",
"Lista interna",
"Campo derivado"
],
resposta:"Dado indivisível",
explicacao:"Não pode ser dividido em outros atributos."
},

{
pergunta:"X → Y representa?",
opcoes:[
"Dependência funcional",
"Relacionamento N:N",
"Agregação",
"Herança"
],
resposta:"Dependência funcional",
explicacao:"X determina o valor de Y."
},

{
pergunta:"Campo depende de parte da PK composta. Problema?",
opcoes:[
"Dependência parcial",
"Dependência total",
"Agregação",
"Redundância física"
],
resposta:"Dependência parcial",
explicacao:"Viola a 2FN."
},

{
pergunta:"Objetivo da normalização?",
opcoes:[
"Reduzir redundância",
"Duplicar registros",
"Aumentar tabelas",
"Eliminar PK"
],
resposta:"Reduzir redundância",
explicacao:"Evita inconsistências e anomalias."
},

{
pergunta:"Campo e-mail com apenas um valor é...",
opcoes:[
"Monovalorado",
"Composto",
"Derivado",
"Multivalorado"
],
resposta:"Monovalorado",
explicacao:"Possui apenas um valor."
},

{
pergunta:"Preço total calculado viola qual FN?",
opcoes:[
"3FN",
"1FN",
"2FN",
"4FN"
],
resposta:"3FN",
explicacao:"Campos calculados não devem ser armazenados."
},

{
pergunta:"Dependência transitiva é quando...",
opcoes:[
"Campo depende de outro não-chave",
"Campo depende da PK",
"Campo depende da FK",
"Tabela depende do SGBD"
],
resposta:"Campo depende de outro não-chave",
explicacao:"Viola a 3FN."
},

{
pergunta:"Nome Completo é atributo...",
opcoes:[
"Composto",
"Atômico",
"Derivado",
"Chave"
],
resposta:"Composto",
explicacao:"Pode ser dividido em nome e sobrenome."
},

{
pergunta:"Regra da 2FN?",
opcoes:[
"Sem dependências parciais",
"Sem listas",
"Sem PK",
"Sem relacionamentos"
],
resposta:"Sem dependências parciais",
explicacao:"Todos atributos dependem da PK inteira."
},

{
pergunta:"Como tratar telefone na 1FN?",
opcoes:[
"Tabela secundária",
"Campo texto único",
"JSON",
"Array"
],
resposta:"Tabela secundária",
explicacao:"Atributos multivalorados vão para outra tabela."
},

{
pergunta:"Dependência total ocorre quando...",
opcoes:[
"Depende da PK inteira",
"Depende parcialmente",
"Depende da FK",
"Depende do usuário"
],
resposta:"Depende da PK inteira",
explicacao:"Característica correta da 2FN."
},

{
pergunta:"A 4FN evita qual problema?",
opcoes:[
"Duplicação combinatória",
"Falta de PK",
"Campos compostos",
"Dependência total"
],
resposta:"Duplicação combinatória",
explicacao:"Evita redundância em relacionamentos múltiplos."
},

{
pergunta:"Por que evitar anomalia de exclusão?",
opcoes:[
"Para não apagar dados importantes",
"Para reduzir CPU",
"Para criar índices",
"Para gerar backup"
],
resposta:"Para não apagar dados importantes",
explicacao:"Exclusões indevidas podem remover dados válidos."
},

{
pergunta:"Na 1FN os dados devem ser...",
opcoes:[
"Atômicos",
"Multivalorados",
"Calculados",
"Duplicados"
],
resposta:"Atômicos",
explicacao:"Não podem existir listas internas."
},

{
pergunta:"Qual FN proíbe vetores internos?",
opcoes:[
"1FN",
"2FN",
"3FN",
"4FN"
],
resposta:"1FN",
explicacao:"A 1FN exige atomicidade."
},

{
pergunta:"Na 3FN campos não-chave dependem de...",
opcoes:[
"PK",
"FK",
"Campos derivados",
"Outros atributos"
],
resposta:"PK",
explicacao:"Dependem exclusivamente da chave primária."
}

];






/* =========================
   EXECUÇÃO
========================= */

criarQuiz("quiz1","score1",simulado1);
criarQuiz("quiz2","score2",simulado2);
criarQuiz("quiz3","score3",simulado3);