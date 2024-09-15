import fs from "fs";


export interface SaveUseCase {

    excecute: (options: Options ) => boolean;

}

export interface Options{
    fileContent : string,
    fileDestination?: string,
    fileName?   : string
}

export class SaveFile  implements SaveUseCase{
    constructor(){

    }

    excecute({fileContent, 
        fileDestination = 'outputs', 
        fileName='table'
    }:Options):boolean{

        try {
            fs.mkdirSync(fileDestination, {recursive:true})
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`,fileContent);
            
            return true;
        } catch (error) {
            console.log(error);
            
            return false;
        }

   
    }
}