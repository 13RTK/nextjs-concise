'use server';

import { Todo } from '@/app/_types/Todo';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const todoDataFilePath = path.join(process.cwd(), 'app/_data/todos.json');

export async function getTodos() {
  return await getTodosData();
}

export async function toggleTodoComplete(id: number) {
  const todos = await getTodosData();

  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }

    return todo;
  });

  await writeFile(todoDataFilePath, JSON.stringify({ todos: updatedTodos }));
}

async function getTodosData(): Promise<Todo[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const jsonString = await readFile(todoDataFilePath, 'utf-8');

  const { todos } = JSON.parse(jsonString);

  return todos;
}
