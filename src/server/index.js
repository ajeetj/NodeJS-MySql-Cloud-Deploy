const express = require("express");
const server = express();

const route = require("../route/route");

server.use('/',route);

module.exports = server;