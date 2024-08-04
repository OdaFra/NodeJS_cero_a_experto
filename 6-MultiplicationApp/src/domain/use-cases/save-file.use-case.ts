import fs from 'fs'
//Creamos la interfae a utilizar para guardar el archivo
export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
    // base: number;

}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /**repository StorageRepository */
    ) { }

    execute({
        fileContent,
        fileDestination = 'outputs',
        fileName='table',
       // base,

    }: Options): boolean {
        try {
            //Crear un directorio en raiz
            fs.mkdirSync(fileDestination, { recursive: true });

            // grabar en un archivo en la carpeta creada.

            

            fs.writeFileSync(`${fileDestination}/${fileName}.txt`,
                fileContent)
            console.log('File created!')
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    };
}