
        const taskInput = document.getElementById('taskInput');
        const addTaskButton = document.getElementById('addTaskButton');
        const taskList = document.getElementById('taskList');
        const filterAll = document.getElementById('filterAll');
        const filterCompleted = document.getElementById('filterCompleted');
        const filterPending = document.getElementById('filterPending');
    
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];  // Carrega as tarefas do localStorage
    
        // Função para salvar as tarefas no localStorage
        function saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(tasks));  // Salva as tarefas no localStorage
        }
    
        // Função para renderizar as tarefas
        function renderTasks(filter = 'all') {
            taskList.innerHTML = ''; // Limpa a lista
            tasks
                .filter(task => {
                    if (filter === 'completed') return task.completed;
                    if (filter === 'pending') return !task.completed;
                    return true;
                })
                .forEach((task, index) => {
                    const li = document.createElement('li');
                    li.className = `task ${task.completed ? 'completed' : ''}`;
                    li.innerHTML = `
                        <span>${task.text}</span>
                        <div>
                            <button class="remove" onclick="removeTask(${index})">Excluir</button>
                            <button onclick="toggleTask(${index})">${task.completed ? 'Desmarcar' : 'Concluir'}</button>
                        </div>
                    `;
                    taskList.appendChild(li);
                });
        }
    
        // Função para adicionar tarefa
        addTaskButton.addEventListener('click', () => {
            const taskText = taskInput.value.trim();
            if (taskText) {
                tasks.push({ text: taskText, completed: false });
                taskInput.value = '';
                saveTasks();  // Salva as tarefas no localStorage
                renderTasks();
            }
        });
    
        // Função para remover tarefa
        function removeTask(index) {
            tasks.splice(index, 1);
            saveTasks();  // Atualiza o localStorage
            renderTasks();
        }
    
        // Função para alternar o status da tarefa
        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();  // Atualiza o localStorage
            renderTasks();
        }
    
        // Funções para filtrar tarefas
        filterAll.addEventListener('click', () => renderTasks('all'));
        filterCompleted.addEventListener('click', () => renderTasks('completed'));
        filterPending.addEventListener('click', () => renderTasks('pending'));
    
        // Inicializa a lista de tarefas
        renderTasks();

    