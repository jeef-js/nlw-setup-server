import Fastify from 'fastify';

const app = Fastify();

app.get('/', () => {
  return 'Test Route';
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server running at port 3333');
  });
