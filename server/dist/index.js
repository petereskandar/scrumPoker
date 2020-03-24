"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scrum_poker_server_1 = require("./scrum-poker-server");
var app = new scrum_poker_server_1.ScrumPokerServer().getApp();
exports.app = app;
