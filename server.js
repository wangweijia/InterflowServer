// 导入WebSocket模块:
const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 8080
});

let allws = [];

wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    allws.push(ws);
    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);

        allws.map((item, index)=>{
            item.send(`${index} ECHO: ${message}`, (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        })
    });
    
});
