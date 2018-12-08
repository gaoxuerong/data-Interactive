const http = require('http')
const server = http.createServer(function(request,response) {
  // // if (response.statusCode === 200) {
  // //   response.write(response.toString)
  // //   // response.write(request.pwd)
  // //   response.end()
  // // }
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // response.write(response.username)
  response.end('qqq');
  // response.end(response.username + response.pwd);
})
server.listen('3000','localhost')
console.log('成功')