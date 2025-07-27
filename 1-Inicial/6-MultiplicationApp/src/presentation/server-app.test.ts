import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";

describe('Server App', () => {

    const options = {
        base:2,
        limit: 10,
        showTable: false,
        fileDestination: 'outputs',
        fileName: 'table'
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('Should create SeverApp Instance', () => {
        const severApp = new ServerApp();
        expect(severApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    });

    test('Should run ServerAp with Options', () => {
        // Espiar los logs
        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        ServerApp.run(options);
        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenCalledWith('Server running...');
        expect(logSpy).toHaveBeenCalledWith('File created!');

        expect(createTableSpy).toHaveBeenCalledTimes(1);
        expect(createTableSpy).toHaveBeenCalledWith({ base: options.base, limit: options.limit });

        expect(saveFileSpy).toHaveBeenCalledTimes(1);
        expect(saveFileSpy).toHaveBeenCalledWith(
            {
                fileContent: expect.any(String),
                fileDestination: options.fileDestination,
                fileName: options.fileName,
                base: options.base

            }
        );


    })

    test('Showd run with custom options',()=>{
        const logMock = jest.fn();
        const logErorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(true);

        console.log = logMock;
        console.error = logErorMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith('Server running...');
        expect(createMock).toHaveBeenCalledWith({ base: options.base, limit: options.limit });
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2',
            fileDestination: options.fileDestination,
            fileName: options.fileName,
            base: options.base
        });
        expect(logMock).toHaveBeenCalledWith('File created!');
        expect(logErorMock).not.toHaveBeenCalled();
    });

    
});