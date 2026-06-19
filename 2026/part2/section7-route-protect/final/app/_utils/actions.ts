'use server';

import prisma from '@/app/_utils/prisma';
import { TodoModel } from '@/app/generated/prisma/models';
import { readFile } from 'fs/promises';
import { revalidatePath } from 'next/cache';
import path from 'path';

const todoDataFilePath = path.join(process.cwd(), 'app/_data/todos.json');

export async function getTodos() {
  return await prisma.todo.findMany();
}

export async function toggleTodoComplete(id: number) {
  const transaction = prisma.$transaction(async (tx) => {
    const todo = await tx.todo.findFirst({
      where: {
        id,
      },
    });

    if (!todo) {
      throw new Error('Todo not found');
    }

    await tx.todo.update({
      where: {
        id,
      },

      data: {
        completed: !todo.completed,
      },
    });

    revalidatePath('/');
  });

  return transaction;
}

async function getTodosData(): Promise<TodoModel[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const jsonString = await readFile(todoDataFilePath, 'utf-8');

  const { todos } = JSON.parse(jsonString);

  return todos;
}
