const http = require('http');
const createServer = http.createServer((request,response) =>{
    response.end('hello world');

});
createServer.listen(8080);