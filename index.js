var express = require('express');
var mysql = require('mysql');
var hex2ascii = require('hex2ascii');

var app = express();
var server = require('http').Server(app)
var io = require('socket.io')(server)
var net = require('net');

var host = '172.20.10.2';
var port = 5000;

net.createServer(function(sock){
   console.log('Conectado: ' + sock.remoteAddress + ':' + sock.remotePort)
   sock.on('data' , function(data){
        console.log(data.toString())
   }) 
}).listen(port,host);



