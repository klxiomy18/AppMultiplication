import { beforeEach } from 'node:test';
import { SaveFile } from './save-file.use-case';
import fs from 'fs';


describe('Pruebas en save-file.use-case', () => {

    const customOptions = {
        fileContent :'custom content',
        fileDestination: 'custom-outputs/file-destination',
        fileName:'custom-table-name'
       }
       
       const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    afterEach(()=>{
       const outputFolderExist = fs.existsSync('outputs')
       if(outputFolderExist) fs.rmSync('outputs', {recursive:true})

        const customOutputFolderExist = fs.existsSync(customOptions.fileDestination)
        if(customOutputFolderExist) fs.rmSync(customOptions.fileDestination,{recursive:true })
    })
    test('should save file with default values', () => {

      const saveFile = new SaveFile();
      const filePath = 'outputs/table.txt'
      const options = {
        fileContent: 'test content'
      }
      const result = saveFile.excecute(options);
      const checkFile = fs.existsSync(filePath);
      const fileContent = fs.readFileSync(filePath, {encoding:'utf-8'})

      expect(result).toBe(true);
      expect(checkFile).toBe(true);
      expect(fileContent).toBe(options.fileContent)
     })
    
     test('should save file with custom values', () => {
        const saveFile = new SaveFile();

      
    const result = saveFile.excecute(customOptions);
    const fileExists = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });
    
    expect( result ).toBe( true );
    expect( fileExists ).toBe( true );
    expect( fileContent ).toBe( customOptions.fileContent );
     });

     test('should return false if directory could not be created', () => {
       
        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            ()=> { throw new Error('error')}
        );

        const result = saveFile.excecute(customOptions);
        expect(result).toBe(false)

        mkdirSpy.mockRestore();
     });

     test('should return false if file could not be created', () => {
       
        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            ()=> { throw new Error('This is a custom writing error message from testing')}
        );

        const result = saveFile.excecute({fileContent:'hola'});
        expect(result).toBe(false);

        writeFileSpy.mockRestore();

     })
     
     
})
