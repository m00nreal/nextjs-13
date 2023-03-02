import AddTodoForm from './addTodoForm';
import Todo from './todo';

async function getTodos() {
  const todos = await fetch('http://localhost:3000/api/todos', {
    cache: 'no-cache',
  });
  if (!todos.ok) {
    throw new Error('failed to fetch');
  }
  return todos.json();
}

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default async function Home() {
  const networkTodos = await getTodos();

  return (
    <main className={'container px-6 mx-auto lg:w-8/12'}>
      <h1
        className={
          'text-3xl text-center font-bold underline-offset-2 decoration-gray-400 underline'
        }
      >
        Mis tareas por hacer
      </h1>
      <AddTodoForm />
      <div className={'flex gap-2 flex-col'}>
        {networkTodos.map((t: any) => (
          <Todo key={t.id} todo={t} />
        ))}
      </div>
    </main>
  );
}
