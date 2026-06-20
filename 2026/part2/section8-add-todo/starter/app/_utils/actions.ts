'use server';

import prisma from '@/app/_utils/prisma';
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

export async function deleteTodo(id: number) {
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  revalidatePath('/');
}
