import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app"


describe('Pruebas en server-app', () => {
    const options = {
        base:2,
        limit:10,
        showTable:false,
        destination:'tets',
        name:'test'
    }
    
    // test('should create Server app instance', () => {
     
    //     const serverApp = new ServerApp();
    //     expect(serverApp).toBeInstanceOf(ServerApp);
    //     expect(typeof ServerApp.run).toBe('function');

    // });

    // test('should run serverApp with options ', () => {

    //     const logSpy = jest.spyOn(console, 'log');
    //     const createTableSpy = jest.spyOn(CreateTable.prototype, 'excecute');
    //     const saveFileSpy = jest.spyOn(SaveFile.prototype, 'excecute');

    //     ServerApp.run(options);
    //     expect(logSpy).toHaveBeenCalledTimes(2);
    //     expect(logSpy).toHaveBeenCalledWith('Server running...');
    //     expect(logSpy).toHaveBeenCalledWith('File created!');

    //     expect(createTableSpy).toHaveBeenCalledTimes(1);
    //     expect(createTableSpy).toHaveBeenCalledWith({
    //         base: options.base, limit:options.limit
    //     });

    //     expect(saveFileSpy).toHaveBeenCalledTimes(1);
    //     expect(saveFileSpy).toHaveBeenCalledWith({
    //         fileContent: expect.any(String),
    //         fileDestination: options.destination,
    //         fileName: options.name,
    //     })
    // })
    
    
    test('should run with custom values mocked', () => {

        const logMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 1 = 1');
        const saveFileMock = jest.fn().mockReturnValue(true);

        console.log = logMock
        CreateTable.prototype.excecute = createMock;
        SaveFile.prototype.excecute = saveFileMock;
      
        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith('Server running...');
        expect(createMock).toHaveBeenCalledWith({"base":options.base, "limit":options.limit})
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent:'1 x 1 = 1',
            fileDestination: options.destination,
            fileName: options.name,
        });
        expect(logMock).toHaveBeenCalledWith('File created!');

    })
    
})
