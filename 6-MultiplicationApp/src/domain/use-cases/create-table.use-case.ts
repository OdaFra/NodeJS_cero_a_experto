//Creamos la interface a utilizar
export interface CreateTableUseCase {
    //Agregamos como parametro requerido otra interface
    execute: (options: CreateTableOptions) => String;
}

export interface CreateTableOptions {
    base: number;
    limit?: number;
}



export class CreateTable implements CreateTableUseCase {
    constructor(
        /** DI - Dependency Injection*/
    ) { }
    //Metodo dentro de la clase
    execute({ base, limit = 10 }: CreateTableOptions) {
        let ouputMessage = '';
        for (let i = 1; i <= limit; i++) {
            ouputMessage += `${base} x ${i} = ${base * i}\n`
        }
        return ouputMessage;
    }
}