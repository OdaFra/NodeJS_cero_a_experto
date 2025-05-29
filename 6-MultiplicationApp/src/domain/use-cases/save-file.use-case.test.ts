import fs from 'fs';
import { SaveFile } from "./save-file.use-case";

describe('SaveFileUseCase', () => { 
    
    beforeEach(() => {
        // Eliminar el archivo si existe antes de cada prueba
      fs.rmSync('outputs', { recursive: true, force: true });
    });

    afterAll(() => {
        // Eliminar el archivo si existe después de todas las pruebas
         fs.rmSync('outputs', { recursive: true, force: true });
    });


    test('should save file with default values', () => { 

        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent:'Test Content for file'
        }
        const result = saveFile.execute(options);
        expect(result).toBe(true);
        const fileExist = fs.existsSync(filePath); //ojo porque puede dar un falso positivo si el archivo ya existe
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});

        expect(fileExist).toBe(true);
        expect(fileContent).toBe(options.fileContent);
       // fs.unlinkSync(filePath); //Borramos el archivo creado para evitar falsos positivos en las siguientes pruebas
        


     }) 


})