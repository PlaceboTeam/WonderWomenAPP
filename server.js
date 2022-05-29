const express = require("express");

const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server);

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
    })
    app.use(express.static(__dirname + '/assets'))

io.on('connection', (socket) =>{
    socket.on('chat message', (data) => {
        io.emit('chat message', {
            message: data.message,
            name: data.name
        })
    })
})

server.listen(5500, ()  => {
    console.log('Сервер старт');
});

// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//       console.log('user disconnected');
//     });
//   });
// server.listen(5500, () => {
//   console.log('listening on *:3000');
// });