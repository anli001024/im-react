// 实例化websoscket websocket有两种协议ws(不加密)和wss(加密)
var webSocket = new WebSocket("ws://127.0.0.1:3002");
webSocket.onopen = function (evt) {
    // 一旦连接成功，就发送第一条数据
     webSocket.send("第一条数据")
}
webSocket.onmessage = function (evt) {
    // 这是服务端返回的数据
    console.log("服务端说" + evt.data)
}
// 关闭连接
webSocket.onclose = function (evt) {
    console.log("Connection closed.")
}

export default webSocket