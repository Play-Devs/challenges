const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); 

// Rota para obter todas as tarefas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
});

// Rota para criar uma nova tarefa
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
});

// Rota para atualizar uma tarefa
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description },
      { new: true } // Retornar a tarefa atualizada
    );
    if (!updatedTask) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
});

// Rota para deletar uma tarefa
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
});

module.exports = router;
