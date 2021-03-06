"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express = require("express");
var nconf = require("nconf");
var socketIo = require("socket.io");
// express routes
var session_1 = require("./routes/session");
var ScrumPokerServer = /** @class */ (function () {
    function ScrumPokerServer() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }
    ScrumPokerServer.prototype.createApp = function () {
        this.app = express();
    };
    ScrumPokerServer.prototype.createServer = function () {
        this.server = http_1.createServer(this.app);
    };
    ScrumPokerServer.prototype.config = function () {
        this.port = process.env.PORT || ScrumPokerServer.PORT;
    };
    ScrumPokerServer.prototype.sockets = function () {
        this.io = socketIo(this.server);
    };
    ScrumPokerServer.prototype.listen = function () {
        var _this = this;
        this.app.use('/session', session_1.sessionRouter);
        this.server.listen(this.port, function () {
            console.log('Running server on port %s', _this.port);
        });
        this.io.on('connect', function (socket) {
            console.log('Connected client on port %s.', _this.port);
            _this.io.emit('message', nconf.get('sessionId'));
            socket.on('Vote', function (v) {
                console.log('[server](message): %s', JSON.stringify(v));
                _this.io.emit('message', v);
            });
            socket.on('disconnect', function () {
                console.log('Client disconnected');
            });
        });
    };
    ScrumPokerServer.prototype.getApp = function () {
        return this.app;
    };
    ScrumPokerServer.PORT = 8080;
    return ScrumPokerServer;
}());
exports.ScrumPokerServer = ScrumPokerServer;
