"use strict";
exports.__esModule = true;
var server_1 = require("./server");
var logger_1 = require("logger");
// eslint-disable-next-line turbo/no-undeclared-env-vars
var port = process.env.PORT || 3001;
var server = (0, server_1.createServer)();
server.listen(port, function () {
    (0, logger_1.log)("api running on ".concat(port));
});
