
import { ServerApp } from "./presentation/server-app";

describe('Test App.ts', () => { 
    test('Should call ServerApp.run with values',async () => {
        // Arrange
        const  serveRunMock = jest.fn();
        ServerApp.run = serveRunMock;
        process.argv = [
            'node',
            'app.js',
            '--base=2',
            '--limit=10',
            '--showTable=false',
            '--fileDestination=outputs',
            '--fileName=multiplication-table'
        ];
        // Act
        await import ('./app');
        // Assert
        expect(serveRunMock).toHaveBeenCalledWith({
            base: 2,
            limit: 10,
            showTable: false,
            fileDestination: 'outputs',
            fileName: 'multiplication-table'
        });
    });
 })