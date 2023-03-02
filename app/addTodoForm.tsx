'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddTodoForm() {
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        description,
      }),
    });
    const parsed = await response.json();

    if (parsed === 'ok') {
      router.refresh();
      setDescription('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="my-4 flex flex-col gap-2">
      <label className="flex flex-col">
        Añadir tarea
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          minLength={3}
          required
          className="border-gray-600 border-2 rounded"
        />
      </label>
      <button
        type="submit"
        className="bg-gray-500 rounded text-white px-2 py-1"
      >
        Añadir Todo
      </button>
    </form>
  );
}
