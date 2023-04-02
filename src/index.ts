import { IConfig } from "./interfaces/config";
import { CONST_VIRS, COMMAND } from "./vir";
import { AddExector } from "./exector";

async function exec(cmd: String, config: IConfig) {
    console.log(CONST_VIRS.spinner.start);

    let exector;

    //add command handler here
    switch (cmd) {
        case COMMAND.ADD: exector = new AddExector(); break;
        default: break;
    }

    await exector?.exec(config);

    console.log(CONST_VIRS.spinner.end);
}

module.exports = exec;