import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

//Creamos la interface con respecto a los parametros a utilizar en el run
interface RunOptions {
    base           : number;
    limit          : number;
    showTable      : boolean;
    fileDestination: string;
    fileName       : string;
}


export class ServerApp {
    static run({ base, limit, showTable, fileDestination, fileName }: RunOptions) {
        console.log('Server running...');

        //Creamos la instancia por lo que es agregado como injeccion de dependencias!
        const table = new CreateTable().execute({ base, limit });

        const wasCreated = new SaveFile().execute({ fileContent: table,
            fileDestination:fileDestination, fileName:fileName, //fileDestination: `./outputs/`, 
            base:base

         })

        if (showTable) console.log(table);
        (wasCreated) ? console.log('File created!') : console.error('File not created!')
    }
}