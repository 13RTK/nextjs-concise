'use server';

import { News } from '@/app/_types/News';
import prisma from '@/app/_utils/prisma';
import { TodoCreateInput } from '@/app/generated/prisma/models';
import { revalidatePath } from 'next/cache';

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

export async function addTodo(formData: FormData) {
  const todoCreateInput: TodoCreateInput = {
    text: formData.get('text') as string,
    completed: false,
  };

  await prisma.todo.create({
    data: todoCreateInput,
  });

  revalidatePath('/');
}

export async function deleteTodo(id: number) {
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath('/');
}

export async function getNews(): Promise<News[]> {
  const NEWS_API_KEY = '';

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${NEWS_API_KEY}`,
  );

  const data = await response.json();

  return data.articles.slice(0, 5);
}
