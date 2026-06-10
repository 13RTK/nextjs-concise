import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ todoId: string }> },
) {
  const { todoId } = await params;
  const jsonString = await readFile(
    path.join(process.cwd(), 'app/data/todos.json'),
    'utf-8',
  );

  const { todos } = JSON.parse(jsonString);

  const todo = todos.find((todo: any) => Number(todo.id) === Number(todoId));

  return Response.json(todo);
}
