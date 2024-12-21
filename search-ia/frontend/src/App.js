import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import * as docx from 'docx';
import { saveAs } from 'file-saver';

function App() {
    const [userMessage, setUserMessage] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [editableContent, setEditableContent] = useState('');

    // Função para capturar a mensagem do usuário e chamar a API
    const generateContent = async (type) => {
        const response = await fetch(`http://localhost:5000/generate-${type}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userMessage: userMessage,  // Passando a mensagem do usuário para o backend
            }),
        });

        const data = await response.json();
        setResponseData(data);
        setEditableContent(data ? extractContent(data) : '');
    };

    // Função para extrair conteúdo relevante
    const extractContent = (response) => {
        if (response && response.choices && response.choices.length > 0) {
            return response.choices[0].message.content;
        }
        return '';
    };

    // Função para exportar pesquisa para DOCX
    const exportToDocx = () => {
        const doc = new docx.Document({
            sections: [
                {
                    properties: {},
                    children: [
                        new docx.Paragraph({
                            text: editableContent,
                            heading: docx.HeadingLevel.HEADING_1,
                        }),
                    ],
                },
            ],
        });

        docx.Packer.toBlob(doc).then((blob) => {
            saveAs(blob, 'pesquisa.docx');
        });
    };

    // Função para exportar planilha para XLSX
    const exportToXlsx = () => {
        const wb = XLSX.utils.book_new();
        
        // Transformar o conteúdo editado em linhas e células
        const rows = editableContent.split('\n').map(row => row.split('\t'));

        const ws = XLSX.utils.aoa_to_sheet(rows);
        XLSX.utils.book_append_sheet(wb, ws, 'Planilha');
        XLSX.writeFile(wb, 'planilha.xlsx');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Gerador de Conteúdo com IA</h1>
            <textarea
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Digite sua mensagem aqui"
                style={styles.textarea}
            />
            <div>
                <button onClick={() => generateContent('survey')} style={styles.button}>Gerar Pesquisa</button>
                <button onClick={() => generateContent('spreadsheet')} style={styles.button}>Gerar Planilha</button>
            </div>

            {responseData && (
                <div style={styles.resultContainer}>
                    <h2>Resultado da IA:</h2>
                    <div style={styles.editableContentContainer}>
                        {editableContent && (
                            <div
                                contentEditable
                                style={styles.editableContent}
                                onInput={(e) => setEditableContent(e.target.innerText)}  // Atualizando o conteúdo editado
                            >
                                {editableContent}
                            </div>
                        )}
                    </div>

                    <div>
                        {responseData.choices[0].message.content.includes('Planilha') ? (
                            <button onClick={exportToXlsx} style={styles.button}>Exportar Planilha</button>
                        ) : (
                            <button onClick={exportToDocx} style={styles.button}>Exportar Pesquisa</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f4f4f9',
        borderRadius: '10px',
        width: '80%',
        margin: 'auto',
    },
    header: {
        color: '#333',
    },
    textarea: {
        width: '80%',
        height: '150px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ddd',
        marginBottom: '20px',
        fontSize: '16px',
        boxSizing: 'border-box',
    },
    button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        margin: '10px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    resultContainer: {
        marginTop: '20px',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '20px auto',
    },
    editableContentContainer: {
        marginBottom: '20px',
    },
    editableContent: {
        border: '1px solid #ddd',
        padding: '10px',
        minHeight: '100px',
        borderRadius: '5px',
        fontSize: '16px',
        whiteSpace: 'pre-line',
        wordWrap: 'break-word',
    },
};

export default App;
