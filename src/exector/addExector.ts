import { IConfig } from "../interfaces";
import { Exector } from "./index";

class AddExector extends Exector {
    async exec(config: IConfig) {
        const tasks: any = [];
       
        //handle multiple task 
        for (let i = 0; i < 10; i++) {
            tasks.push(this.threadpool.run("param", { name: "addexec" }));
        }

        this.spinner.start();
        
        await Promise.all(tasks).then(res => {
            //handle here
            this.spinner.stop();
        })
    }
}

export default AddExector;