declare const Piscina: any;
declare const Spinner: any;
import { IConfig } from "../interfaces/config";
declare class Exector {
    threadpool: typeof Piscina;
    spinner: typeof Spinner;
    constructor();
    exec(config: IConfig): Promise<void>;
}
export default Exector;
