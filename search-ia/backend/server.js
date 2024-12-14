const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Função para chamar a IA local
const generateWithAI = async (userMessage) => {
    try {
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

        return response.data;
    } catch (error) {
        console.error('Erro ao chamar a IA:', error);
        throw new Error('Erro ao chamar a IA');
    }
};

// Endpoint para gerar pesquisas
app.post('/generate-survey', async (req, res) => {
    const { userMessage } = req.body;  // A mensagem enviada pelo usuário
    try {
        const surveyData = await generateWithAI(userMessage);
        res.json(surveyData);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao gerar a pesquisa' });
    }
});

// Endpoint para gerar planilhas
app.post('/generate-spreadsheet', async (req, res) => {
    const { userMessage } = req.body;  // A mensagem enviada pelo usuário
    try {
        const spreadsheetData = await generateWithAI(userMessage);
        res.json(spreadsheetData);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao gerar a planilha' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
