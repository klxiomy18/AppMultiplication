const fs = require("fs")
import { yarg } from "./config/plugins/yargs.plugins";

const {b,l,s} = yarg


    let numero = b;
    let limit = l;
    let header = `
        ======================
           Tabla del ${numero} 
        ======================\n`;
    let outputMessage = ''

    for (let i = 1; i <= limit; i++) {  
        outputMessage += `${numero} x ${i} = ${i*numero}\n`
    }
    const outPuthPath = `outputs`
    outputMessage = header + outputMessage;
    if(s){
        console.log(outputMessage);
        fs.mkdirSync(outPuthPath, {recursive:true})
        fs.writeFileSync(`${outPuthPath}/tabla-${numero}.txt`,outputMessage)
    
    }
   