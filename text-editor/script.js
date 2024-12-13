const editor = document.getElementById('editor');
const saveButton = document.getElementById('save');
const openButton = document.getElementById('open');
const clearButton = document.getElementById('clear');
const feedback = document.getElementById('feedback');

// Salvar arquivo
saveButton.addEventListener('click', async () => {
  if (!editor.value.trim()) {
    feedback.textContent = "O campo de texto está vazio!";
    feedback.style.color = "red";
    return;
  }

  try {
    // Verificar compatibilidade com showSaveFilePicker
    if (window.showSaveFilePicker) {
      const handle = await window.showSaveFilePicker({
        types: [
          {
            description: "Text Files",
            accept: { "text/plain": [".txt"] },
          },
        ],
      });
      const writable = await handle.createWritable();
      await writable.write(editor.value);
      await writable.close();
      feedback.textContent = "Arquivo salvo com sucesso!";
      feedback.style.color = "green";
    } else {
      // Fallback para navegadores sem suporte
      const blob = new Blob([editor.value], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "arquivo.txt";
      link.click();
      feedback.textContent = "Arquivo salvo (download gerado)!";
      feedback.style.color = "green";
    }
  } catch (error) {
    feedback.textContent = "Erro ao salvar o arquivo!";
    feedback.style.color = "red";
    console.error(error);
  }
});

// Abrir arquivo
openButton.addEventListener('click', async () => {
  try {
    if (window.showOpenFilePicker) {
      const [fileHandle] = await window.showOpenFilePicker({
        types: [
          {
            description: "Text Files",
            accept: { "text/plain": [".txt"] },
          },
        ],
      });

      const file = await fileHandle.getFile();
      const content = await file.text();
      editor.value = content;
      feedback.textContent = "Arquivo carregado com sucesso!";
      feedback.style.color = "green";
    } else {
      // Fallback para navegadores antigos
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".txt";
      input.onchange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          editor.value = reader.result;
          feedback.textContent = "Arquivo carregado com sucesso!";
          feedback.style.color = "green";
        };
        reader.readAsText(file);
      };
      input.click();
    }
  } catch (error) {
    feedback.textContent = "Erro ao abrir o arquivo!";
    feedback.style.color = "red";
    console.error(error);
  }
});

// Limpar texto
clearButton.addEventListener('click', () => {
  editor.value = "";
  feedback.textContent = "";
});