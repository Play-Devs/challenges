## 🎯 Desafio da Semana (06/11/2024)

### 📝 Criando uma API RESTful para Gerenciamento de Tarefas

Seja bem-vindo(a) ao desafio da semana na **Play Devs**! 🎉  
O foco desta vez é **Back-End**, e o objetivo é criar uma **API RESTful** que permita o gerenciamento de tarefas de forma simples e eficiente. Você terá a oportunidade de explorar conceitos de APIs e colocar suas habilidades em prática. 🚀

---

### 🎯 **Objetivo do Desafio**

Você deve desenvolver uma API RESTful que inclua as seguintes funcionalidades:
1. Criar tarefas com título e descrição.
2. Listar todas as tarefas.
3. Atualizar o status das tarefas (pendente/concluída).
4. Excluir tarefas.

A linguagem e as ferramentas são livres, mas criatividade e organização serão essenciais para se destacar!

---

### 🚀 **Requisitos**

#### **Funcionalidades Obrigatórias**
- **CRUD Completo**:
  - **Create**: Endpoint para adicionar novas tarefas.
  - **Read**: Endpoint para listar todas as tarefas.
  - **Update**: Endpoint para atualizar o título, descrição ou status de uma tarefa.
  - **Delete**: Endpoint para excluir uma tarefa pelo ID.
  
- **Estrutura de Dados Simples**:
  Cada tarefa deve conter os seguintes campos:
  ```json
  {
    "id": "uuid",
    "title": "string",
    "description": "string",
    "status": "pending" | "completed"
  }
  ```

- **Validações**:
  - O campo title é obrigatório.
  - O campo description deve ter no máximo 250 caracteres.
  
#### Funcionalidades Opcionais (para ganhar pontos extras):
- Filtros:
  - Buscar tarefas com base no status (pendente ou concluída).
  - Buscar tarefas por palavra-chave no título ou descrição.
- Paginação:
  - Implementar paginação no endpoint de listagem.
- Autenticação:
  - Adicionar autenticação básica (JWT, API Key ou outro método simples).

---

### 🛠️ **Ferramentas Sugeridas**

#### **Linguagens e Frameworks**:
- **Node.js**: `Express.js`, `NestJS`.
- **Python**: `Flask`, `FastAPI`, `Django REST Framework`.
- **PHP**: `Laravel`, `Slim Framework`.
- **C#**: `ASP.NET Core`.

#### **Bancos de Dados**:
- **SQL**: SQLite, PostgreSQL, MySQL.
- **NoSQL**: MongoDB, Firebase.

#### **Ferramentas de Teste**:
- **Postman** ou **APIDog** para testar os endpoints.

---

### ✅ **Critérios de Avaliação**

Sua solução será avaliada com base nos seguintes critérios:

#### **1. Funcionalidade**
- Atende a todos os requisitos obrigatórios?
- Funcionalidades opcionais foram implementadas?

#### **2. Código e Organização**
- O código é limpo e bem estruturado?
- As boas práticas foram seguidas?
- Existe separação clara entre camadas (se aplicável)?

#### **3. Documentação**
- Há um arquivo `README.md` claro explicando como rodar e testar a API?
- A documentação dos endpoints está bem descrita?

#### **4. Criatividade**
- Há alguma funcionalidade ou diferencial criativo?

---

### 📬 **Entrega do Projeto**

- Submeta seu projeto dentro da pasta do desafio da semana no repositório.
- Inclua um arquivo `README.md` explicando como rodar e utilizar o editor de texto.

---

### 🌟 **Premiação**

O vencedor será reconhecido como **@Vencedor da Semana**, recebendo:
- 🧪 **20% de XP Boost**
- 🪙 **3000 DevCoins**
- 📢 **Destaque na comunidade com direito a @everyone**

---

🎉 **Boa sorte e divirta-se codando!** Estamos ansiosos para ver o que você vai criar. 🚀
