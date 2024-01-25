const express = require('express')
const http = require('http')
const app = express();
const { Server } = require("socket.io");
const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
    console.log(`New User with id : ${socket.id}`);
    socket.on("New-Message", (value) => {
        io.emit('send-message', value)
    })
})
app.use(express.static('./public'))


app.get('/', (req, res) => {
    res.sendFile('/public/index.html')
});

server.listen('3000', () => {
    console.log('Server Started at PORT 3000');
})
