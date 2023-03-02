import { todos } from '@/data/todos';
import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json(todos);
}

export async function POST(request: Request, res: Response) {
  const body = await request.json();
  const { description } = body;
  if (description) {
    todos.push({
      id: randomUUID(),
      createdAt: new Date().toString(),
      description,
      isCompleted: false,
    });
  }

  return new Response(JSON.stringify('ok'));
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const { description } = body;
  console.log({ description });
  const index = todos.findIndex((t) => t.description === description);
  console.log(index);
  todos.splice(index, 1);
  return new Response(JSON.stringify('ok'));
}

export async function PATCH(request: Request) {
  const params = new URLSearchParams(request.url.split('?')[1]);
  const todo = todos.find((todo) => todo.id === params.get('id'));
  if (!todo) {
    return new Response('error');
  }
  todo.isCompleted = !todo.isCompleted;
  return new Response(JSON.stringify('ok'));
}
