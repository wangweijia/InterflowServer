// 导入WebSocket模块:
const WebSocket = require('ws');

const MessageType = {
    // 新消息
    Message: 1,
    // 用户列表
    UserList: 2,
    // 登录状态检测
    LoginState: 3,
    // 系统消息
    SysMessage: 4,
}

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 8080
});

let allws = [];

wss.on('connection', function (ws) {
    console.log('connection');

    allws.push(ws);
    ws.on('message', function (message) {
        allws.map((item, index)=>{
            item.send(message, (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        })
    });

});
