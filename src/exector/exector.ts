const { Piscina } = require("piscina");
const Spinner = require("cli-spinner").Spinner;
import { CONST_VIRS } from "../vir";
import { IConfig } from "../interfaces/config";

class Exector {
    threadpool: typeof Piscina; //线程池
    spinner: typeof Spinner;//加载中

    constructor() {
        this.threadpool = new Piscina({
            filename: CONST_VIRS.threadpool.filename,
            minThreads: CONST_VIRS.threadpool.minthreads,
            maxThreads: CONST_VIRS.threadpool.maxthreads,
            maxQueue: CONST_VIRS.threadpool.maxqueue,
        })
        this.spinner = new Spinner(CONST_VIRS.spinner.exec);
        this.spinner.setSpinnerString(CONST_VIRS.spinner.style);
    }

    async exec(config: IConfig) {
        throw Error("You must override this method!");
    }
}

export default Exector;