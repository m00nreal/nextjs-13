import { randomUUID } from 'crypto';

export const todos = [
  {
    id: randomUUID(),
    createdAt: new Date().toString(),
    description: 'Betunchas',
    isCompleted: false,
  },
  {
    id: randomUUID(),
    createdAt: new Date().toString(),
    description: 'Limpiar',
    isCompleted: false,
  },
  {
    id: randomUUID(),
    createdAt: new Date().toString(),
    description: 'Trabajar',
    isCompleted: false,
  },
  {
    id: randomUUID(),
    createdAt: new Date().toString(),
    description: 'Ir al gym',
    isCompleted: false,
  },
];
