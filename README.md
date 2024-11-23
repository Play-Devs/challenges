# Gerenciador de Tarefas

O Gerenciador de Tarefas é uma aplicação simples que permite gerenciar suas tarefas diárias de forma eficiente. Com ele, você pode adicionar, editar, excluir e marcar tarefas como concluídas. As tarefas são armazenadas localmente no navegador, utilizando o `localStorage`, garantindo que as informações sejam preservadas mesmo após o fechamento da página.

## Funcionalidades

- **Adicionar Tarefa**: Insira uma tarefa no campo de texto e clique em "Adicionar" para incluí-la na lista.
- **Editar Tarefa**: Clique em "Editar" ao lado de uma tarefa para modificar seu conteúdo.
- **Excluir Tarefa**: Clique em "Excluir" para remover uma tarefa da lista.
- **Concluir/Desmarcar Tarefa**: Marque a tarefa como concluída ou desmarque-a para indicá-la como pendente.
- **Filtrar Tarefas**: Utilize os filtros para exibir todas as tarefas, apenas as concluídas ou apenas as pendentes.

## Tecnologias Utilizadas

- **HTML5**: Estrutura e conteúdo da página.
- **CSS3**: Estilo e layout responsivo.
- **JavaScript**: Interatividade e gerenciamento das tarefas no navegador.

## Como Funciona

### HTML

- A estrutura HTML é simples e funcional, incluindo um campo de input para inserir novas tarefas, botões para filtrar as tarefas e uma lista não ordenada (`<ul>`) para exibir as tarefas adicionadas.

### CSS

- O design é responsivo e adaptável a diferentes tamanhos de tela, com um layout centralizado.
- Estilos personalizados para destacar tarefas concluídas, além de animações suaves nos botões e interações.

### JavaScript

- As tarefas são armazenadas no `localStorage`, garantindo persistência entre sessões.
- Funções interativas para adicionar, editar, excluir, concluir e desmarcar tarefas.
- Filtros que permitem exibir tarefas com status específicos: concluídas, pendentes ou todas.

## Como Usar

1. Abra o arquivo `index.html` no seu navegador.
2. No campo de texto, insira uma nova tarefa e clique em "Adicionar" para incluí-la na lista.
3. Utilize os botões de edição, exclusão e conclusão para interagir com as tarefas.
4. Use os filtros para visualizar tarefas de acordo com seu status: "Todas", "Concluídas" ou "Pendentes".


## Contribuindo

Contribuições são bem-vindas! Se você quiser melhorar este projeto ou adicionar novas funcionalidades, sinta-se à vontade para enviar um **pull request** ou criar um **issue**.

## Licença

Este projeto é de código aberto e distribuído sob a licença **MIT**.
