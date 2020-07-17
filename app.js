var ws = require('nodejs-websocket');
var server = ws.createServer(function(comn){
  console.log('新的连接');
  // 绑定事件， 服务端接收客户端信息
  comn.on('text',function(str){
    console.log(str);
    // comn.sendText(str);
    broadcast(str);
  })
  setTimeout(function(){
    comn.sendText('来自服务端消息');
  },5000)
  comn.on('error',function(err){
     console.log(err);
  })
}).listen(8888);
//所有连接都遍历出来发消息
function broadcast(str){
  server.connections.forEach((comn)=>{
    comn.sendText(str);
  });
}
console.log('Server running at http:localhost:8888');