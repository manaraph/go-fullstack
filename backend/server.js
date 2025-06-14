const http = require('http');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const normalizePort = val => {
  const port = parseInt(val, 10);

  if(isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }

  return false;
}

const port = normalizePort(PORT);
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated priviledges.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use.`);
      process.exit(1);
      break;
    default:
      throw error;
      break;
  }
}
const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ?  `pipe ${address}` : `port ${port}`;
  console.log(`Listening on ${bind}`);
});

server.listen(PORT);
