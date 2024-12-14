# Gerador de Conteúdo com IA 🚀🤖

Bem-vindo ao **Gerador de Conteúdo com IA**! Este projeto permite que você gere pesquisas 📄 ou planilhas 📊 personalizadas com base em uma mensagem fornecida pelo usuário. A IA irá processar a mensagem e gerar um conteúdo que pode ser editado e exportado para formatos como **DOCX** ou **XLSX**.

---

# Clique para ver o Vídeo de Demonstração ⬇️
[![Demo do Projeto](https://img.youtube.com/vi/uFZKpbZOdGI/maxresdefault.jpg)](https://www.youtube.com/watch?v=uFZKpbZOdGI)

## Funcionalidades ✨da de Mensagem do Usuário 💬**: Digite sua mensagem e envie para o backend gerar conteúdo.
- **Geração de Conteúdo com IA 🤖**: A IA gera respostas para pesquisas ou planilhas com base na mensagem enviada.
- **Edição de Conteúdo 📝**: O conteúdo gerado pode ser editado diretamente na interface.
- **Exportação de Conteúdo 💾**: Exporte o conteúdo gerado para arquivos **DOCX** ou **XLSX**.

---


- **Frontend**:
  - React ⚛️
  - Axios 📦
  - XLSX.js 📊
  - docx.js 📄
  - FileSaver.js 💾

- **Backend**:
  - Node.js 💻
  - Express.js 🚀
  - Axios 📡

---

## Pré-requisitos 🖥️

Antes de rodar o projeto, **é necessário ter o LM Studio instalado**, pois ele será usado para rodar a IA **Llama** e conectá-la ao backend. Você pode baixar o LM Studio [aqui](https://lmstudio.ai/).

**No LM Studio**, você deve configurar e rodar a IA **Meta Llama 3.1**, que será responsável por gerar o conteúdo de acordo com a mensagem enviada pelo usuário.

---

## Como Usar 🚀

### Frontend 🖥️

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/seu-usuario/gerador-conteudo-ia.git
   cd gerador-conteudo-ia
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

4. **Acesse no navegador**: [http://localhost:3000](http://localhost:3000)

---

### Backend 🌐

1. **Clone este repositório (backend)**:
   ```bash
   git clone https://github.com/seu-usuario/backend-ia.git
   cd backend-ia
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor backend**:
   ```bash
   npm start
   ```

4. **Acesse no backend**: [http://localhost:5000](http://localhost:5000)

---

### Conectar o LM Studio ao Backend 🧑‍💻

1. **Inicie o LM Studio** e configure a IA **Meta Llama 3.1**.
2. **Certifique-se de que a IA esteja rodando** localmente na porta `1234` (ou configure conforme necessário no arquivo `backend.js`).
3. **Verifique se o LM Studio está aceitando requisições do seu backend**, como está configurado no código backend:

   ```js
   const response = await axios.post('http://localhost:1234/v1/chat/completions', {
       model: 'meta-llama-3.1-8b-instruct',
       messages: [
           {
               role: 'user',
               content: userMessage, // A mensagem do usuário será enviada dinamicamente
           },
       ],
       max_tokens: 500,
   });
   ```

---

## Como Funciona 🤔

### Frontend 💻
- O usuário digita uma mensagem no campo de entrada e clica nos botões para gerar uma **pesquisa** ou **planilha**.
- A mensagem é enviada para o backend via API, que processa e retorna os dados.
- O conteúdo gerado é exibido e pode ser editado na interface.
- O usuário pode exportar o conteúdo editado em **DOCX** ou **XLSX**.

### Backend 🔧
- O backend usa o modelo de IA **Meta Llama 3.1** para gerar conteúdo baseado na mensagem fornecida.
- O backend tem dois endpoints: 
  - **`/generate-survey`**: Para gerar pesquisas.
  - **`/generate-spreadsheet`**: Para gerar planilhas.

---

## Endpoints da API 📡

- **POST /generate-survey**: Gera uma pesquisa com base na mensagem do usuário.
- **POST /generate-spreadsheet**: Gera uma planilha com base na mensagem do usuário.

---

## Instalação e Configuração 🛠️

1. **Certifique-se de ter o Node.js instalado** (versão 16 ou superior):
   - [Baixe o Node.js aqui](https://nodejs.org/).

2. **Instale as dependências no frontend e backend**:
   ```bash
   npm install
   ```

3. **Inicie o servidor do frontend e do backend**:
   - Backend: `npm start` no diretório do backend.
   - Frontend: `npm start` no diretório do frontend.

4. **Configure o LM Studio para rodar a IA**.

---

## Contribuindo 💪

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/gerador-conteudo-ia.git
   ```

2. **Crie uma nova branch**:
   ```bash
   git checkout -b nome-da-sua-branch
   ```

3. **Faça suas alterações** e **commit**:
   ```bash
   git commit -m "Sua mensagem de commit"
   ```

4. **Envie para o repositório remoto**:
   ```bash
   git push origin nome-da-sua-branch
   ```

5. **Abra um Pull Request**!

---

## Licença 📝

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

🔧 **Divirta-se criando conteúdos com IA!** 😄


