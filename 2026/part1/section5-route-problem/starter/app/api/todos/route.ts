import { readFile } from 'fs/promises';
import { NextRequest } from 'next/server';
import path from 'path';

export async function GET(request: NextRequest) {
  const order = request.nextUrl.searchParams.get('order');

  const jsonString = await readFile(
    path.join(process.cwd(), 'app/data/todos.json'),
    'utf-8',
  );

  const { todos } = JSON.parse(jsonString);

  if (order && order.toLowerCase() === 'desc') {
    const reversedTodos = todos.reverse();
    return Response.json(reversedTodos);
  }

  return Response.json(todos);
}
