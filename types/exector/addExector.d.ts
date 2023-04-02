import { IConfig } from "../interfaces";
import { Exector } from "./index";
declare class AddExector extends Exector {
    exec(config: IConfig): Promise<void>;
}
export default AddExector;
