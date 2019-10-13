const http = require('http');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.set('port', PORT);
const server = http.createServer(app);
// const server = http.createServer((req, res) => {
  console.log(`Server running on port ${PORT}`);
//   res.end(`Server running on port ${PORT}`);
// });

server.listen(PORT);