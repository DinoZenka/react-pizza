const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./pubclic/db.json');

const middleWare = jsonServer.defaults({
  static: './build',
});

const PORT = process.env.PORT || 3000;

server.use(middleWare);
server.use(router);

server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});