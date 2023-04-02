"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMAND = exports.CONST_VIRS = void 0;
var path = require("path");
exports.CONST_VIRS = {
    threadpool: {
        filename: path.resolve(__dirname, "utils/worker.js"),
        minthreads: 12,
        maxthreads: 24,
        maxqueue: 24 * 24
    },
    spinner: {
        start: "任务开始执行...",
        exec: "任务执行中...%s",
        end: "任务执行完毕...",
        style: "|/-\\",
    } //加载效果
};
exports.COMMAND = {
    ADD: "add",
};
