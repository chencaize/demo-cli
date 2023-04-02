import { IConfig } from "./interfaces/config";
import { CONST_VIRS, COMMAND } from "./vir";
import { AddExector } from "./exector";
const chalk = require("chalk");

async function exec(cmd: String, config: IConfig) {
    try{
    console.log(CONST_VIRS.spinner.start);

    let exector;

    //add command handler here
    switch (cmd) {
        case COMMAND.ADD: exector = new AddExector(); break;
        default: break;
    }

    await exector?.exec(config);

    console.log(CONST_VIRS.spinner.end);
    }catch(error){
        console.log(chalk.white(error));
    }
}

module.exports = exec;
