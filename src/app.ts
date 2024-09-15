
import { yarg as argv, yarg } from "./config/plugins/yargs.plugins";
import { ServerApp } from "./presentation/server-app";

(async ()=> {

main()

} )()

async function main (){
   
    const {b:base, l:limit,s:showTable,d:destination, n:name} = yarg;

    ServerApp.run({base,limit,showTable, destination, name});
    
    
    
}