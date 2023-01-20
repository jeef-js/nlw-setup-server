import Fastify, { FastifyRequest } from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/habits', async (req, res) => {
  const habits = prisma.habit.findMany();
  return habits;
});

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Server running at host 0.0.0.0. and port 3333');
  });
