import fs from 'fs';
import { SaveFile } from "./save-file.use-case";

describe('SaveFileUseCase', () => { 
    
    const saveFile = new SaveFile();

     const customOptions ={
          fileContent:"Custom Content",
          fileDestination: "custom-outputs/file-destination",
          fileName:"custom-table-name",
        }
      const customFilePath =  `${customOptions.fileDestination}/${customOptions.fileName}.txt`;
    

    // beforeEach(() => {
    //     // Eliminar el archivo si existe antes de cada prueba
    //   fs.rmSync('outputs', { recursive: true, force: true });
    // });

    // afterAll(() => {
    //     // Eliminar el archivo si existe después de todas las pruebas
    //      fs.rmSync('outputs', { recursive: true, force: true });
    // });

    afterEach(()=>{
      const outputsFolderExist = fs.existsSync('outputs');
      if (outputsFolderExist) fs.rmSync('outputs',{recursive:true})
      
      const customOutputFoldderExists = fs.existsSync(customOptions.fileDestination);
      if (customOutputFoldderExists) fs.rmSync(customOptions.fileDestination, {recursive: true}) 
    })

    test('should save file with default values', () => { 

        const filePath = 'outputs/table.txt';
        const options = {
            fileContent:'Test Content for file'
        }
        const result = saveFile.execute(options);
        expect(result).toBe(true);
        const fileExist = fs.existsSync(filePath); //ojo porque puede dar un falso positivo si el archivo ya existe
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});

        expect(result).toBe(true);
        expect(fileExist).toBe(true);
        expect(fileContent).toBe(options.fileContent);
       // fs.unlinkSync(filePath); //Borramos el archivo creado para evitar falsos positivos en las siguientes pruebas
     }) 

    test('Should save file with custom values', () => {
      
      const result = saveFile.execute(customOptions);
      const fileExist = fs.existsSync(customFilePath);
      const fileContent = fs.readFileSync(customFilePath, {encoding:'utf-8'})

      expect(result).toBe(true);
      expect(fileExist).toBe(true);
      expect(fileContent).toBe(customOptions.fileContent);
       })

})