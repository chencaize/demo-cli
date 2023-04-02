const path = require("path");

export const CONST_VIRS = {
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
}

export const COMMAND = {
    ADD: "add",
}