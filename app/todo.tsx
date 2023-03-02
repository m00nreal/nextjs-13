'use client';

import { useRouter } from 'next/navigation';

type Todo = {
  id: number;
  isCompleted: boolean;
  description: string;
  createdAt: number;
};

export default function Todo({ todo }: { todo: Todo }) {
  const router = useRouter();

  const handleRemove = async () => {
    const response = await fetch('http://localhost:3000/api/todos', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      // using description for now since id is dynamic =/
      body: JSON.stringify({ description: todo.description }),
    });

    const parsed = await response.json();

    if (parsed === 'ok') {
      router.refresh();
    }
  };

  const handleToggle = async () => {
    const response = await fetch(
      `http://localhost:3000/api/todos?id=${todo.id}`,
      {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
        },
      }
    );

    const parsed = await response.json();

    if (parsed === 'ok') {
      router.refresh();
    }
  };

  return (
    <div
      key={todo.id}
      className="p-2 rounded flex justify-between border-gray-400 border"
    >
      <div className="my-auto flex gap-2" role="button" onClick={handleToggle}>
        <input
          type={'checkbox'}
          className="checked:bg-slate-400"
          defaultChecked={todo.isCompleted}
        />
        <span className={`${todo.isCompleted ? 'line-through' : ''}`}>
          {todo.description}
        </span>
      </div>

      <button
        onClick={handleRemove}
        className="bg-black text-white px-2 py-1 rounded-sm hover:bg-slate-800"
      >
        Remover
      </button>
    </div>
  );
}
