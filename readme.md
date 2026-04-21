

## 🎄 O que é:

##### A Árvore binária é um tipo de estrutura de dados utilizada para organizar dados de forma eficiente.Ajudando principalmente em busca rápida, ordenação de dados, armazenamento hierárquico! Elas podem ser encontradas em banco dedados(indexação), sistemas de arquivos, motores de busca, compiladores, algorítimos de IA, frameworks e libs, além de outros.

* Cada elemento da árvore é chamado de nó (node) e cada nó só pode ter no máximo dois filhos( filhos da esquerda ou da direita)
---
**Tipos de árvores binárias**

    Árvores binárias simples (estruturais)
     Focadas mais na forma do que em regras de balanceamento

    1. Árvore binária cheia (full): Todo nó tem 0 ou 2 filhos
    2. Árvore binária completa (complete): Preenchida da esquerda pra direita
    3. Árvore perfeita (perfect): Todos os níveis completos
    4. Árvore degenerada: Vira praticamente uma lista (pior caso)

**Árvores binárias de busca e balanceadas**

    - BST (Binary Search Tree): Esquerda < nó e direita > nó.
     Ela é rápida se estiver balanceada e fica lenta se virar uma lista

    - AVL: Mais rígida, mantém a altura equilibrada (diferença <= 1),
     ela é sempre balanceada e faz rotações para se ajustar

    - Red-Black-tree: Menos rígida que AVL, usa cores(vermelho e preto) para balancear.
     É mais usada na prática (ex:Libs internas)

**Outras Árvores Binárias**

    - Splay Tree: move elementos acessados para o topo
    - Treap: Mistura Árvore Binária + heap
    - Heap Binário: (min-heap / max-heap)
    - Árvore de Expressão: Usada em compiladores


**B-tree**:
    
        B-Tree não é uma árvore binária. B-Tree é uma árvore onde cada nó pode ter vários filhos( não 2),
     armazena várias chaves dentro de um único nó e é auto-balanceada. Resumindo, ela pode ter um nó
     com vários valores e vários caminhos

       Ela foi feita para Disco e banco de dados, sistema de arquivos e Indexação eficiente.
     Ela é usada em MySQL, PostgreSQL, NTFS,ext4, etc

       A Ávores binárias são base conceitual para organização hierárquica e busca eficiente,
     mas não são ideias para disco. Então B-Tree é utilizada como uso real em banco de dados,
     não árvores binárias comuns (BST, AVL, etc)

**B+tree**

      É uma vairante da -B-tree otimizada para armazenamento de dados em blocos. E já que os nós internos não 
      possuem dados, mais chaves cabem em um único nó. Tornando a busca mais rápida e deixando a árvore menor.

      Então a maioria dos bancos usa B+ Tree, porque:

     Dados ficam só nas folhas
     Melhor para buscas sequenciais e range queries (ex: BETWEEN)
     É a estrutura predominante para índices


**Diferença de B-Tree entre B+Tree**

A versão mais conhecida da árvore B é a árvore B+. O que distingue a árvore B+ da árvore B são dois aspectos principais:


| Características | B-tree | B+tree |
| ----------- | ----------- | ----------- |
| Armazenamento de dados     |Chaves e dados em todos os nós (internos e folhas).      | Dados apenas nas folhas. Nós internos armazenam apenas chaves para roteamento.     |
| Ponteiro em folhas     | Não possui     | Folhas são conectadas em uma lista encadeada.     |
| Consultas de intervalo               |   Menos eficiente; exige travessia da árvore (in-order traversal).                           | Muito eficiente; folhas são conectadas por ponteiros, permitindo varredura sequencial.
| Uso do espaço |    Pode usar menos espaço se dados forem pequenos.       | Pode ocupar mais espaço devido à duplicação de chaves em nós internos.
