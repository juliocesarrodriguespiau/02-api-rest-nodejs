import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello my friends!!!'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP SERVER IS RUNNING!!!')
  })
