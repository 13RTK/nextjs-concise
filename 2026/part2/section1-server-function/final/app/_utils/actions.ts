'use server';

import { readFile } from 'fs/promises';
import path from 'path';

const todoDataFilePath = path.join(process.cwd(), 'app/_data/todos.json');

export async function getTodos() {
  const jsonString = await readFile(todoDataFilePath, 'utf-8');

  const { todos } = JSON.parse(jsonString);

  return todos;
}
